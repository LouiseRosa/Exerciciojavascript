function  VerificarPar ( ) 
{
    let  numero  =  parseInt( prompt ( "Digite um numero" ) ) ;
      resultado


    if  ( numero  %  2  ==  0 ) {
        resultado  =  "numero é par"
    }
     if  ( numero  %  2  ==  1 ) {
        resultado  =  "numero é impar"
    }
    alerta ( resultado ) ;
}