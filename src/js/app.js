const email = document.querySelector("#email");
const password = document.querySelector("#password");
const btn_submit = document.querySelector("#btn_submit");
const btn_remove = document.querySelector("#btn_remove");

btn_submit.addEventListener("click", (refresh) => {
    refresh.preventDefault();

    const value_email = email.value;
    const value_password = password.value;
    const usuario = document.querySelector("#usuario");
    const msg_erro = document.querySelector("#msg_erro");

    if (value_email === "usuario@gmail.com" && value_password === "123") {
        const ul = document.querySelector("ul");
        const title_usuario = document.querySelector("h3");
        ul.appendChild(usuario);

            title_usuario.innerHTML = "USUARIO"; 
            usuario.innerHTML = `
            <p>
                <strong>
                    E-mail:
                </strong> ${value_email}
            </p> 
            <p>
                <strong>
                    Senha:
                </strong> ${value_password}
            </p>`;
            btn_remove.style.display="block";
            
    } else if (value_email === "" || value_password === "") {
        // formulario incompleto
        msg_erro.classList = "erro" ;
        msg_erro.innerHTML = "Complete o Formulario" ;

        setTimeout(() => {
            msg_erro.classList = "" ;
            msg_erro.innerHTML = "" ;
        }, 3000);

        return;

    } else if (value_email === "usuario@gmail.com" && value_password != "123") {
        //Senha errada
        msg_erro.classList = "incorreto" ;
        msg_erro.innerHTML = "OPS! você digitou a senha errada" ;

        setTimeout(() => {
            msg_erro.classList = "" ;
            msg_erro.innerHTML = "" ;
        }, 3000);

        return;

    } else if (value_email != "usuario@gmail.com") {
        //Usuario não cadastrado
        msg_erro.classList = "nao_cadastrado" ;
        msg_erro.innerHTML = "usuario não cadastrado" ;

        setTimeout(() => {
            msg_erro.classList = "" ;
            msg_erro.innerHTML = "" ;
        }, 3000);

        return;
    } 
});

// função tema
const btn_theme = document.querySelector("#theme");
btn_theme.addEventListener("click",toggle,false);

function toggle(){        
    const help = document.querySelector("a");
    const body = document.querySelector("body");
    const bolls = document.querySelector("#bolls");

    if(body.classList.contains("darck")){
        
        body.classList.remove("darck");
        help.classList.remove("darck");
        email.classList.remove("darck");
        password.classList.remove("darck");
        
        bolls.style.transform = " translateX(0px)";
        btn_theme.style.border = "solid 2px black"; 

    }else{
        body.classList.add("darck");
        help.classList.add("darck");
        email.classList.add("darck");
        password.classList.add("darck");

        bolls.style.transform = " translateX(27px)";
        btn_theme.style.border = " solid 2px white";
    }
}