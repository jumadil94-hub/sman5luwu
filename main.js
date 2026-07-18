        document.addEventListener("DOMContentLoaded", () => {


            AOS

            AOS.init({

                duration: 800,

                once: true

            });




            // ISOTOPE

            const grid =
                document.querySelector('.gallery-container');



            const iso =
                new Isotope(grid, {

                    itemSelector: '.gallery-item',

                    layoutMode: 'fitRows'

                });





            const buttons =
                document.querySelectorAll('.filter-btn');



            buttons.forEach(button => {


                button.addEventListener('click', () => {


                    let filter =
                        button.dataset.filter;



                    iso.arrange({

                        filter: filter

                    });




                    // active state

                    buttons.forEach(btn => {

                        btn.classList.remove('active');

                    });


                    button.classList.add('active');



                });


            });





            // LIGHTBOX


            const lightbox =
                GLightbox({

                    selector: '.glightbox',

                    touchNavigation: true,

                    loop: true

                });


            // guru dan tenagakependidikan

            const teacherGrid =
                document.querySelector('.teacher-container');


            const teacherIso =
                new Isotope(
                    teacherGrid,
                    {

                        itemSelector: '.teacher-item',

                        layoutMode: 'fitRows'

                    });



            const teacherButtons =
                document.querySelectorAll('.teacher-btn');



            teacherButtons.forEach(btn => {


                btn.addEventListener('click', () => {


                    teacherIso.arrange({

                        filter: btn.dataset.filter

                    });



                    teacherButtons.forEach(b => {

                        b.classList.remove('active');

                    });


                    btn.classList.add('active');



                });


            });


            // kontak

            const form =
                document.querySelector('.contact-form form');


            form.addEventListener('submit', (e) => {

                e.preventDefault();


                const button =
                    form.querySelector('button');


                button.innerHTML =
                    "⏳ Mengirim...";


                setTimeout(() => {


                    button.innerHTML =
                        "✓ Terkirim";


                }, 1500);


            });


            // footer


            // fungsi tahun otomatis
            document.getElementById("year").innerHTML =
                new Date().getFullYear();

            // fungsi top-up

            const backTop =
                document.getElementById("backTop");


            window.addEventListener("scroll", () => {


                if (window.scrollY > 500) {

                    backTop.classList.add("show");

                }

                else {

                    backTop.classList.remove("show");

                }


            });



            backTop.addEventListener("click", () => {


                window.scrollTo({

                    top: 0,

                    behavior: "smooth"

                });


            });

        });
