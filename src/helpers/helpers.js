import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export function myAlert(title, icon) {
  return MySwal.fire({
    title: <p>{title}</p>,
    icon: icon,
    confirmButtonColor: "#1d4ed8",
    // didOpen: () => {
    //   // `MySwal` is a subclass of `Swal`
    //   //   with all the same instance & static methods
    //   MySwal.clickConfirm();
    // },
  });
}
let loader = false;
function setLoader(val) {
  loader = val;
}

export { loader, setLoader };
