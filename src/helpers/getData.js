import Swal from 'sweetalert2';
import { myColor } from '../global';

export const getData = async( urlApi ) => {
    let responseReturn = 0;
    const response = await fetch( urlApi )
                            .then(async function (response) {
                                if (response.ok) { responseReturn = await response.json(); } 
                                else {
                                    responseReturn = [];
                                    console.log("Error: Server response ", response.status);
                                    Swal.fire({
                                        title: "Lo sentimos",
                                        text: "Respuesta del servidor" + response.status,
                                        icon: "error",
                                        confirmButtonColor: myColor,
                                      });
                                }
                            })
                            .catch(function (error) {
                                responseReturn = [];
                                console.log(error.message + ": No network or server connection");
                                Swal.fire({
                                    title: "Lo sentimos",
                                    text: "No hay conexión con el servidor",
                                    icon: "error",
                                    confirmButtonColor: myColor,
                                  });
                            });

    // const response = await fetch( urlApi );
    // const responseReturn = await response.json();

    return responseReturn;
}