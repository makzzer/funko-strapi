import AdminListadoProductos from "../components/AdminListadoProductos";
import { useUserContext } from "../context/UserContext";
import Manzanita from "../components/Manzanita";



const DashboardUser = () => {
  const { user } = useUserContext();

  const mensaje = "hola test1";

  //const mensaje = "Hola🙂    " + user.email;

  const customers = [
    {
      id: 1,
      image: "https://example.com/image1.jpg",
      item: "Product A",
      customerName: "John Doe",
      totalAmount: "$100",
      status: "Completed",
    },
    {
      id: 2,
      image: "https://example.com/image2.jpg",
      item: "Product B",
      customerName: "Jane Smith",
      totalAmount: "$150",
      status: "Pending",
    },
  ];

  return (
    <>
      <div className="transition-all duration-700 min-h-screen mx-auto max-w-6xl text-center items-center flex-col md:mt-20 mt-4 pt-20">
     

        <div className="m-2">
          <AdminListadoProductos />
          
        </div>



        <Manzanita />
      </div>
    </>
  );
};

export default DashboardUser;
