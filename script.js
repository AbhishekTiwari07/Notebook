const login = document.getElementById('signin')
const reg = document.getElementById('signup')
const main = document.getElementById('main')
const toggle = document.querySelector('.toggle')
const tatti = document.querySelector('.tatti')
const time = document.querySelector('.time')

const tl = new TimelineMax()
let flag = 1;

toggle.addEventListener('click', ()=> {
    if(flag === 1) {
        tl.to(
            tatti, 
            0.5,
            {
                left: "0%",
                ease: Power2.easeInOut
            }
        ).to(
            time, 
            1,
            {
                left: "50%",
                ease: Power2.easeInOut
            },
            "-=0.5"
        ).fromTo(
            toggle, 
            1,
            {
                width: "30%",
                color: "black"
            }, 
            {
                width: "50%",
                color: "white"
            },
            "-=1"
        ).fromTo(
            toggle, 
            1,
            {
                width: "50%",
                color: "white"
            }, 
            {
                width: "30%",
                color: "black"
            },
        )
        flag = 0
        setTimeout(()=> {
            let str = ""
            str += `
            <div class="in">
                <form >
                    <div class="name">
                        <i class="fa fa-user" aria-hidden="true"></i>
                        <input type="text" id="name" placeholder="Username">
                    </div>
                    <div class="pass">
                        <i class="fa fa-unlock" aria-hidden="true"></i>
                        <input type="password" id="pass" placeholder="Password">
                    </div>
                    <div class="inst">
                        <i class="fa fa-university" aria-hidden="true"></i>
                        <input type="text" id="inst" placeholder="Institute">
                    </div>
                    <div class="email">
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                        <input type="email" id="email" placeholder="Email">
                    </div>
                    <div class="action">
                        <input type="submit" value="Submit" class="sub">
                        <input type="reset" value="Reset" class="res">
                    </div>    
                </form>
            </div>
            `
            time.innerHTML = str
        }, 600)
        setTimeout(()=> {
            toggle.innerText = "Login"
        },1000)
    } else {
        tl.to(
            tatti, 
            0.5,
            {
                left: "50%",
                ease: Power2.easeInOut
            }
        ).to(
            time, 
            1,
            {
                left: "0",
                ease: Power2.easeInOut
            },
            "-=0.5"
        ).fromTo(
            toggle, 
            1,
            {
                width: "30%",
                color: "black"
            }, 
            {
                width: "50%",
                color: "white"
            },
            "-=1"
        ).fromTo(
            toggle, 
            1,
            {
                width: "50%",
                color: "white"
            }, 
            {
                width: "30%",
                color: "black"
            }
        )
        flag = 1
        setTimeout(()=> {
            let str = ""
            str += `
            <div class="in">
                <form>
                    <div class="name">
                    <i class="fa fa-user" aria-hidden="true"></i>
                        <input type="text" id="name" placeholder="Username">
                    </div>
                    <div class="pass">
                    <i class="fa fa-unlock" aria-hidden="true"></i>
                        <input type="text" id="pass" placeholder="Password">
                    </div>
                    <div class="action">
                        <input type="submit" value="Submit" class="sub">
                        <input type="reset" value="Reset" class="res">
                    </div>
                </form>
            </div>
            `
            time.innerHTML = str
            toggle.innerText = "Register"
        }, 600)
        setTimeout(()=> {
            toggle.innerText = "Register"
        }, 1000)
    }  
})

login.addEventListener('click', (e)=> {
    e.preventDefault()
})
// login.addEventListener('click', ()=> {
//     let str = ""
//     str += `
//     <div class="login">
//         <form>
//             <div class="name">
//                 <label>Username</label>
//                 <input type="text" id="name" placeholder="Username">
//             </div>
//             <div class="pass">
//                 <label>Password</label>
//                 <input type="text" id="pass" placeholder="Password">
//             </div>
//             <div class="action">
//                 <input type="submit" value="Submit">
//                 <input type="reset" value="Reset">
//             </div>
//         </form>
//     </div>
//     `
//     main.innerHTML = str
// })

// reg.addEventListener('click', ()=> {
//     let str = ""
//     str += `
//     <div class="register">
//         <form>
//             <div class="name">
//                 <label>Username</label>
//                 <input type="text" id="name" placeholder="Username">
//             </div>
//             <div class="pass">
//                 <label>Password</label>
//                 <input type="password" id="pass" placeholder="Password">
//             </div>
//             <div class="inst">
//                 <label>Institute</label>
//                 <input type="text" id="inst" placeholder="Institute">
//             </div>
//             <div class="email">
//                 <label>Email ID</label>
//                 <input type="email" id="email" placeholder="Email">
//             </div>
//             <div class="action">
//                 <input type="submit" value="Submit">
//                 <input type="reset" value="Reset">
//             </div>    
//         </form>
//     </div>
//     `
//     main.innerHTML = str
// })