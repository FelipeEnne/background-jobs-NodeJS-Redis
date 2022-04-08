import Mail from "../lib/Mail";

export default {
  key: "RegistrationMail",
  async handle({ data }) {
    const { user } = data;

    await Mail.sendMail({
      from: "Teste <test@test.com.br",
      to: `${user.name} <${user.email}>`,
      subject: "Teste 123",
      html: `Teste ${user.name}`,
    });
  },
};
