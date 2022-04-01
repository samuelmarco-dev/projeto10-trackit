    // function atualizarProgresso(){
    //     const promise = getHabitosHoje(tokenLocal);
    //     promise.then(response => {
    //         console.log(response.data);
    //             if(response.data.length > 0){
    //                 let progresso = 0;
    //                 // eslint-disable-next-line array-callback-return
    //                 response.data.map((habito)=>{
    //                     if(habito.done === true){
    //                         progresso++;
    //                     }
    //                 })
    //                 console.log(Math.abs((progresso/response.data.length)*100));
    //                 // let resultado = Math.abs((progresso/response.data.length)*100);
    //                 setProgressoUsuario(Math.abs((progresso/response.data.length)*100));
    //                 // localStorage.setItem('progresso', Math.abs((progresso/response.data.length)*100));
    //             }
    //     })
    // }

    // function regredirProgresso(){
    //     const promise = getHabitosHoje(tokenLocal);
    //     promise.then(response => {
    //         console.log(response.data);
    //             if(response.data.length > 0){
    //                 let progresso = 0;
    //                 // eslint-disable-next-line array-callback-return
    //                 response.data.map((habito)=>{
    //                     if(habito.done === true){
    //                         progresso--;
    //                     }
    //                 })
    //                 console.log(Math.abs((progresso/response.data.length)*100));
    //                 // let resultado = Math.abs((progresso/response.data.length)*100)
    //                 setProgressoUsuario(Math.abs((progresso/response.data.length))*100);
    //                 // localStorage.setItem('progresso', Math.abs((progresso/response.data.length)*100));
    //             }
    //     })
    // }