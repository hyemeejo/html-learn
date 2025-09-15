const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav>a');

        const observer = new IntersectionObserver(entries =>{
            entries.forEach(entry =>{
                console.log(entry);
                if(entry.isIntersecting){
                    navLinks.forEach(link=>{
                        //모든 링크에서 active 제거
                        link.classList.remove('active');
                        //감지하고 있는 section의 id 찾기
                       const id = entry.target.getAttribute('id');
                       // 해당 id와 같은 href를 가진 nav>a에 active추가
                       const activeLink = document.querySelector(`nav>a[href="#${id}"]`);
                       if(activeLink) activeLink.classList.add('active');
                    });
                }else{

                }
            });
        },{threshold:0.6}); //60% 이상 보여야 현재 섹션으로 인식

        sections.forEach(section=>{
            observer.observe(section);
        })