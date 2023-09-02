import { useContext } from "react";
import underconsimg from "../../../assets/images/bagimg/undercons.jpg";
import { UsersauthContext } from "../Userscontext/UsersContext";
const Bag = () => {
  const { user } = useContext(UsersauthContext);
  console.log(user);
  return (
    <div>
      <img src={underconsimg} />
    </div>
  );
};
export default Bag;
