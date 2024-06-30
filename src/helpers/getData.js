import Swal from 'sweetalert2';
import { myColor } from '../global';

export const getData = async( urlApi ) => {
    let responseReturn = [];
    const response = await fetch( urlApi )
                            .then(async function (response) {
                                if (response.ok) { responseReturn = await response.json(); } 
                                else {
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
                                console.log(error.message + ": No network or server connection");
                                Swal.fire({
                                    title: "Lo sentimos",
                                    text: "No hay conexión con el servidor",
                                    icon: "error",
                                    confirmButtonColor: myColor,
                                  });
                            });

    return responseReturn;
}