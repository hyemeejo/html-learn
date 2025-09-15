  const options = {
            threshold:0.6,
            rootMargin:"0px 0px -100px 0px",
        }
        const Observer = new IntersectionObserver(callback,options);
        const boxes = document.querySelectorAll('.box');
        boxes.forEach(box =>{
            Observer.observe(box);
        });

        function callback(entries){
            entries.forEach(entry=>{
                console.log(entry);
                if(entry.isIntersecting){
                    entry.target.classList.add('active');
                }else{
                    entry.target.classList.remove('active');
                }
            });
        };