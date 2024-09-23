
const blogBtn = document.getElementById('blog-btn');
const homeBtn = document.getElementById('home-btn');

blogBtn.addEventListener('click',function(){
    window.location.href = './blog.html';

    
    homeBtn.classList.remove('hidden');
})