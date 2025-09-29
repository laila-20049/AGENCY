// Variables globales
let currentInfluencer = null;
const AGENCY_WHATSAPP = "+212657501386"; // Remplacez par le vrai numéro

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    initializeRoster();
    initializeContactForm();
    initializeModal();
});

// Fonctions de navigation
function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

function scrollToRoster() {
    document.getElementById('roster').scrollIntoView({ behavior: 'smooth' });
}

// Génération des initiales
function getInitials(name) {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
}

// Initialisation du roster
function initializeRoster() {
    const rosterGrid = document.getElementById('roster-grid');
    
    influencers.forEach(influencer => {
        const card = createInfluencerCard(influencer);
        rosterGrid.appendChild(card);
    });
}

// Création d'une carte influenceur
function createInfluencerCard(influencer) {
    const card = document.createElement('div');
    card.className = 'influencer-card';
    card.onclick = () => openModal(influencer);
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `Voir détails de ${influencer.name}`);

    // Gestion du clavier
    card.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openModal(influencer);
        }
    });

    card.innerHTML = `
        <div class="influencer-avatar">
            <img src="${influencer.image}" alt="${influencer.name}" class="avatar-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="avatar-fallback" style="display: none;">${getInitials(influencer.name)}</div>
        </div>
        <h3 class="influencer-name">${influencer.name}</h3>
        <p class="influencer-handle">${influencer.handle}</p>
        <span class="influencer-niche">${influencer.niche}</span>
        <div class="influencer-followers">${influencer.followers}</div>
        <div class="followers-label">followers</div>
        <button class="btn btn-outline" type="button" style="margin-top: 1rem;">
            Voir détails
        </button>
    `;

    // Corrige le bouton "Voir détails" pour ouvrir la modal sans erreur
    card.querySelector('button').addEventListener('click', function(event) {
        event.stopPropagation();
        openModal(influencer);
    });

    return card;
}

// Gestion de la modal
function initializeModal() {
    const modal = document.getElementById('influencer-modal');
    
    // Fermeture avec Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('open')) {
            closeModal();
        }
    });
    
    // Piégeage du focus dans la modal
    modal.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            const focusableElements = modal.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];
            
            if (e.shiftKey && document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
            } else if (!e.shiftKey && document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
            }
        }
    });
}

// Ouverture de la modal
function openModal(influencer) {
    currentInfluencer = influencer;
    const modal = document.getElementById('influencer-modal');
    
    // Remplir les données
    const modalAvatar = document.getElementById('modal-avatar');
    modalAvatar.innerHTML = `
        <img src="${influencer.image}" alt="${influencer.name}" class="avatar-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="avatar-fallback" style="display: none;">${getInitials(influencer.name)}</div>
    `;
    document.getElementById('modal-title').textContent = influencer.name;
    document.getElementById('modal-handle').textContent = influencer.handle;
    document.getElementById('modal-niche').textContent = influencer.niche;
    document.getElementById('modal-bio').textContent = influencer.bio;
    
    // Plateformes
    const platformsGrid = document.getElementById('modal-platforms');
    platformsGrid.innerHTML = '';
    influencer.platforms.forEach(platform => {
        const platformCard = document.createElement('div');
        platformCard.className = 'platform-card';
        platformCard.innerHTML = `
            <h4>${platform.name} <i data-lucide="users"></i></h4>
            <p class="platform-handle">${platform.handle}</p>
            <p class="platform-followers">${platform.followers} followers</p>
        `;
        platformsGrid.appendChild(platformCard);
    });
    
    // Posts
    const postsGrid = document.getElementById('modal-posts');
    postsGrid.innerHTML = '';
    influencer.posts.forEach(post => {
        const postCard = document.createElement('div');
        postCard.className = 'post-card';
        postCard.innerHTML = `
            <div class="post-platform">${post.platform}</div>
            <h4 class="post-description">${post.description}</h4>
            <p class="post-engagement">${post.engagement}</p>
        `;
        postsGrid.appendChild(postCard);
    });
    
    // Afficher la modal
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    
    // Focus sur le bouton de fermeture
    setTimeout(() => {
        modal.querySelector('.modal-close').focus();
    }, 100);
    
    // Réinitialiser les icônes Lucide
    lucide.createIcons();
}

// Fermeture de la modal
function closeModal() {
    const modal = document.getElementById('influencer-modal');
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    currentInfluencer = null;
}

// Demande de contact via WhatsApp
function requestContact() {
    if (!currentInfluencer) return;
    
    const message = `Bonjour ! Je souhaite demander un contact avec ${currentInfluencer.name} (${currentInfluencer.handle}) pour une collaboration. Merci !`;
    const whatsappUrl = `https://wa.me/${AGENCY_WHATSAPP}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    showToast('Redirection en cours...', 'Vous allez être redirigé vers WhatsApp', 'info');
    closeModal();
}

// Initialisation du formulaire de contact
function initializeContactForm() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        handleContactSubmit();
    });
}

// Gestion de la soumission du formulaire
function handleContactSubmit() {
    const form = document.getElementById('contact-form');
    const formData = new FormData(form);
    
    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const message = formData.get('message').trim();
    
    // Validation
    if (!name || !email || !message) {
        showToast('Erreur', 'Veuillez remplir tous les champs', 'error');
        return;
    }
    
    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showToast('Erreur', 'Veuillez entrer une adresse email valide', 'error');
        return;
    }
    
    // Validation longueur
    if (name.length > 100) {
        showToast('Erreur', 'Le nom doit faire moins de 100 caractères', 'error');
        return;
    }
    
    if (email.length > 255) {
        showToast('Erreur', "L'email doit faire moins de 255 caractères", 'error');
        return;
    }
    
    if (message.length > 1000) {
        showToast('Erreur', 'Le message doit faire moins de 1000 caractères', 'error');
        return;
    }
    
    // Création du message WhatsApp
    const whatsappMessage = `Nom: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    const whatsappUrl = `https://wa.me/${AGENCY_WHATSAPP}?text=${whatsappMessage}`;
    
    // Redirection vers WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Reset du formulaire
    form.reset();
    
    // Toast de confirmation
    showToast('Redirection en cours...', 'Vous allez être redirigé vers WhatsApp', 'info');
}

// Système de toast
function showToast(title, description, type = 'info') {
    const container = document.getElementById('toast-container');
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <div class="toast-title">${title}</div>
        <div class="toast-description">${description}</div>
    `;
    
    container.appendChild(toast);
    
    // Suppression automatique après 5 secondes
    setTimeout(() => {
        toast.style.animation = 'slide-out-right 0.3s ease-out';
        setTimeout(() => {
            if (container.contains(toast)) {
                container.removeChild(toast);
            }
        }, 300);
    }, 5000);
}

// Optimisation des performances - Intersection Observer pour les animations
if ('IntersectionObserver' in window) {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fade-in 0.6s ease-out';
            }
        });
    }, observerOptions);
    
    // Observer les sections pour les animations
    document.addEventListener('DOMContentLoaded', function() {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            observer.observe(section);
        });
    });
}

// Support des préférences de mouvement réduit
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.setProperty('--transition', 'none');
}