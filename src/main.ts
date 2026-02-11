import './style.css'

// Check if mobile view
const isMobile = () => window.innerWidth <= 768;

// Get elements
const dossierItems = document.querySelectorAll('.dossier-item');
const sidebar = document.querySelector('.sidebar') as HTMLElement;
const chatArea = document.querySelector('.chat-area') as HTMLElement;
const chatBackBtn = document.querySelector('.chat-back-btn') as HTMLButtonElement;
const chatCloseX = document.querySelector('.chat-close-x') as HTMLButtonElement;
const filterButtons = document.querySelectorAll('.filter-btn');
const messageInput = document.querySelector('.message-input') as HTMLTextAreaElement;
const sendBtn = document.querySelector('.input-btn.send') as HTMLButtonElement;
const attachmentBtn = document.querySelector('.input-btn.attachment') as HTMLButtonElement;
const navItems = document.querySelectorAll('.nav-item');

// Mobile navigation: Show chat, hide sidebar
function showChat() {
  if (isMobile()) {
    sidebar.classList.add('hidden');
    chatArea.classList.add('active');
    chatBackBtn.style.display = 'flex';
    chatCloseX.style.display = 'flex';
  }
}

// Mobile navigation: Show sidebar, hide chat
function showSidebar() {
  if (isMobile()) {
    sidebar.classList.remove('hidden');
    chatArea.classList.remove('active');
    chatBackBtn.style.display = 'none';
    chatCloseX.style.display = 'none';
  }
}

// Handle dossier selection
dossierItems.forEach(item => {
  item.addEventListener('click', () => {
    dossierItems.forEach(d => d.classList.remove('active'));
    item.classList.add('active');
    showChat();
  });
});

// Handle back button on mobile
chatBackBtn.addEventListener('click', () => {
  showSidebar();
});

// Handle close button on mobile
chatCloseX.addEventListener('click', () => {
  showSidebar();
});

// Handle filter buttons
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Handle message input
if (messageInput) {
  messageInput.addEventListener('input', () => {
    // Auto-resize textarea
    messageInput.style.height = 'auto';
    messageInput.style.height = Math.min(messageInput.scrollHeight, 120) + 'px';
    
    // Enable/disable send button based on content
    if (messageInput.value.trim()) {
      sendBtn.style.opacity = '1';
    } else {
      sendBtn.style.opacity = '0.5';
    }
  });

  messageInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (messageInput.value.trim()) {
        // Send message logic here
        console.log('Message sent:', messageInput.value);
        messageInput.value = '';
        messageInput.style.height = 'auto';
        sendBtn.style.opacity = '0.5';
      }
    }
  });
}

// Handle send button
if (sendBtn) {
  sendBtn.addEventListener('click', () => {
    if (messageInput && messageInput.value.trim()) {
      console.log('Message sent:', messageInput.value);
      messageInput.value = '';
      messageInput.style.height = 'auto';
      sendBtn.style.opacity = '0.5';
    }
  });
}

// Handle attachment button
if (attachmentBtn) {
  attachmentBtn.addEventListener('click', () => {
    console.log('Attachment clicked');
  });
}

// Handle nav items
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navItems.forEach(n => n.classList.remove('active'));
    item.classList.add('active');
  });
});

// Initialize mobile view
if (isMobile()) {
  showSidebar();
} else {
  // Desktop mode: hide nav buttons
  chatBackBtn.style.display = 'none';
  chatCloseX.style.display = 'none';
}

// Handle window resize
window.addEventListener('resize', () => {
  if (isMobile()) {
    // Keep current state
  } else {
    // Desktop - reset state
    sidebar.classList.remove('hidden');
    chatArea.classList.remove('active');
    chatBackBtn.style.display = 'none';
  }
});