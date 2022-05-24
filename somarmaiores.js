function SomarMaioresNumeros( )
{

    let V1 = parseInt(prompt("Digite um valor: "));

    let V2 = parseInt(prompt("Digite um valor"));

    let V3 = parseInt(prompt("Digite um valor"));



    if (V3 < V1 && V1 < V2) {

        alert (V1 + V2);

    }
    else if (V2 < V1 && V1 < V3){

        alert(V1 + V3);
    }
        else{

            alert(V2 + V3);
        }

}










