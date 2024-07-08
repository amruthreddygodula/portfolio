const profileImage = document.getElementById('profileImage');
const hoverMessage = document.getElementById('hoverMessage');

profileImage.addEventListener('mouseover', () => {
  profileImage.classList.add('break');
  hoverMessage.style.opacity = '1';
});

profileImage.addEventListener('mouseout', () => {
  profileImage.classList.remove('break');
  hoverMessage.style.opacity = '0';
});
