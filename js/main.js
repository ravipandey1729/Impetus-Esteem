// Wait for DOM to load completely
document.addEventListener('DOMContentLoaded', function() {
    // Navigation menu toggle for mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Toggle hamburger menu animation
            const bars = document.querySelectorAll('.bar');
            if (menuToggle.classList.contains('active')) {
                bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navMenu.contains(event.target) && !menuToggle.contains(event.target) && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
                
                const bars = document.querySelectorAll('.bar');
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });
    }
    
    // Testimonials carousel
    const testimonials = [
        {
            content: "The mentorship program at Impetus Esteem completely changed my approach to my studies and career goals. My mentor provided invaluable guidance that helped me secure my dream internship.",
            author: "Sarah Johnson",
            position: "Computer Science Student"
        },
        {
            content: "I was struggling with academic direction until I joined Impetus Esteem's mentorship program. My mentor helped me discover my passion for environmental science and guided me through research opportunities.",
            author: "Michael Torres",
            position: "Environmental Science Major"
        },
        {
            content: "The leadership development program transformed not only my professional skills but also my confidence. I now lead a student organization and have secured a management track position after graduation.",
            author: "Emily Chen",
            position: "Business Administration Student"
        }
    ];
    
    let currentTestimonial = 0;
    const testimonialContainer = document.querySelector('.testimonial-carousel');
    const dotsContainer = document.querySelector('.carousel-dots');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (testimonialContainer && dotsContainer && prevBtn && nextBtn) {
        // Create dots based on testimonials count
        for (let i = 0; i < testimonials.length; i++) {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dot.setAttribute('data-index', i);
            dotsContainer.appendChild(dot);
            
            // Add click event to dots
            dot.addEventListener('click', function() {
                currentTestimonial = parseInt(this.getAttribute('data-index'));
                updateTestimonial();
            });
        }
        
        // Previous testimonial button
        prevBtn.addEventListener('click', function() {
            currentTestimonial--;
            if (currentTestimonial < 0) {
                currentTestimonial = testimonials.length - 1;
            }
            updateTestimonial();
        });
        
        // Next testimonial button
        nextBtn.addEventListener('click', function() {
            currentTestimonial++;
            if (currentTestimonial >= testimonials.length) {
                currentTestimonial = 0;
            }
            updateTestimonial();
        });
        
        // Auto-rotate testimonials every 5 seconds
        let testimonialInterval = setInterval(function() {
            currentTestimonial++;
            if (currentTestimonial >= testimonials.length) {
                currentTestimonial = 0;
            }
            updateTestimonial();
        }, 5000);
        
        // Stop auto-rotation when user interacts with carousel
        testimonialContainer.addEventListener('mouseenter', function() {
            clearInterval(testimonialInterval);
        });
        
        testimonialContainer.addEventListener('mouseleave', function() {
            testimonialInterval = setInterval(function() {
                currentTestimonial++;
                if (currentTestimonial >= testimonials.length) {
                    currentTestimonial = 0;
                }
                updateTestimonial();
            }, 5000);
        });
        
        // Function to update testimonial content
        function updateTestimonial() {
            const testimonialItem = document.querySelector('.testimonial-item');
            
            // Add fade-out animation
            testimonialItem.classList.add('fade-out');
            
            // Update content after fade out
            setTimeout(function() {
                const currentItem = testimonials[currentTestimonial];
                testimonialItem.innerHTML = `
                    <div class="testimonial-content">
                        <div class="quote-icon"><i class="fas fa-quote-left"></i></div>
                        <p>${currentItem.content}</p>
                        <div class="testimonial-author">
                            <h4>${currentItem.author}</h4>
                            <p>${currentItem.position}</p>
                        </div>
                    </div>
                `;
                
                // Update active dot
                document.querySelectorAll('.dot').forEach((dot, index) => {
                    if (index === currentTestimonial) {
                        dot.classList.add('active');
                    } else {
                        dot.classList.remove('active');
                    }
                });
                
                // Remove fade-out class and add fade-in
                testimonialItem.classList.remove('fade-out');
                testimonialItem.classList.add('fade-in');
                
                // Remove fade-in class after animation completes
                setTimeout(function() {
                    testimonialItem.classList.remove('fade-in');
                }, 500);
                
            }, 300);
        }
    }
    
    // Scroll animations
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animated');
            }
        });
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);
    
    // Run once on page load
    animateOnScroll();
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            if (!targetId) return; // Skip if href="#"
            
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // Close mobile menu if open
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    menuToggle.classList.remove('active');
                }
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Sticky header on scroll
    const header = document.querySelector('header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
        
        // Hide/show header on scroll direction
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            // Scrolling down
            header.style.top = '-80px';
        } else {
            // Scrolling up
            header.style.top = '0';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Form validation for contact form
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            let isValid = true;
            const requiredFields = contactForm.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                    
                    const errorMsg = document.createElement('div');
                    errorMsg.classList.add('error-message');
                    errorMsg.textContent = 'This field is required';
                    
                    // Remove existing error message if any
                    const existingError = field.parentNode.querySelector('.error-message');
                    if (existingError) {
                        existingError.remove();
                    }
                    
                    field.parentNode.appendChild(errorMsg);
                } else {
                    field.classList.remove('error');
                    const existingError = field.parentNode.querySelector('.error-message');
                    if (existingError) {
                        existingError.remove();
                    }
                }
            });
            
            // Email validation
            const emailField = contactForm.querySelector('[type="email"]');
            if (emailField && emailField.value.trim()) {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(emailField.value)) {
                    isValid = false;
                    emailField.classList.add('error');
                    
                    const errorMsg = document.createElement('div');
                    errorMsg.classList.add('error-message');
                    errorMsg.textContent = 'Please enter a valid email address';
                    
                    // Remove existing error message if any
                    const existingError = emailField.parentNode.querySelector('.error-message');
                    if (existingError) {
                        existingError.remove();
                    }
                    
                    emailField.parentNode.appendChild(errorMsg);
                }
            }
            
            // If form is valid, show success message and reset form
            if (isValid) {
                const formElements = contactForm.elements;
                const formData = {};
                
                for (let i = 0; i < formElements.length; i++) {
                    if (formElements[i].name) {
                        formData[formElements[i].name] = formElements[i].value;
                    }
                }
                
                // Here you would typically send the form data to a server
                console.log('Form submitted with data:', formData);
                
                // Show success message
                const successMsg = document.createElement('div');
                successMsg.classList.add('success-message');
                successMsg.innerHTML = '<i class="fas fa-check-circle"></i> Thank you for your message! We will be in touch soon.';
                
                // Remove existing message if any
                const existingMsg = contactForm.parentNode.querySelector('.success-message');
                if (existingMsg) {
                    existingMsg.remove();
                }
                
                contactForm.parentNode.insertBefore(successMsg, contactForm);
                
                // Reset form
                contactForm.reset();
                
                // Remove success message after 5 seconds
                setTimeout(function() {
                    successMsg.style.opacity = '0';
                    setTimeout(function() {
                        successMsg.remove();
                    }, 500);
                }, 5000);
            }
        });
        
        // Remove error styling when user starts typing
        contactForm.querySelectorAll('input, textarea').forEach(field => {
            field.addEventListener('input', function() {
                this.classList.remove('error');
                const errorMsg = this.parentNode.querySelector('.error-message');
                if (errorMsg) {
                    errorMsg.remove();
                }
            });
        });
    }
});
