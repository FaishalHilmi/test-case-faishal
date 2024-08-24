import FormSignIn from "@/components/organism/FormSignIn";
import AuthTemplate from "@/components/templates/AuthTemplate";

export default function SignIn() {
  return (
    <AuthTemplate
      title="Welcome Back"
      description="We’re so excited to see you again!"
    >
      <FormSignIn />
    </AuthTemplate>
  );
}
