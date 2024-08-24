import Link from "next/link";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import Form from "../molecules/Form";

export default function FormSignUp() {
  return (
    <Form>
      <div className="mb-4">
        <Input name="username" placeholder="Username / Email" />
      </div>
      <div className="mb-4 hidden lg:block">
        <Input name="email" placeholder="Email" />
      </div>
      <div className="mb-4 hidden lg:block">
        <Input name="username" placeholder="Username" />
      </div>
      <div className="mb-4 flex gap-3">
        <select className="py-4 px-5 hidden lg:block border-2 border-customGray font-inter rounded-md focus:outline-black">
          <option value="+62">(ID) +62</option>
          <option value="+49">(DE) +49</option>
          <option value="+81">(JP) +81</option>
          <option value="+61">(AU) +61</option>
        </select>
        <Input
          type="number"
          name="phoneNumber"
          placeholder="Whatsapp Phone Number"
        />
      </div>
      <div className="mb-4">
        <Input type="password" name="password" placeholder="Password" />
      </div>
      <Button>Sign Up</Button>
      <span className="font-medium text-center block mt-8 text-sm">
        Sudah punya akun?{" "}
        <Link href="#" className="text-customBlue">
          Masuk di sini
        </Link>
      </span>
    </Form>
  );
}
