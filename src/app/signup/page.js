import FormSignUp from "@/components/organism/FormSignUp";
import AuthTemplate from "@/components/templates/AuthTemplate";

export default function SignUp() {
  return (
    <AuthTemplate
      title="Welcome to Forwadin"
      description="Revolutionize your communication journey with Fowardin today"
    >
      <FormSignUp />
    </AuthTemplate>
  );
}
