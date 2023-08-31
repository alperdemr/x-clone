import Form from "@/components/Form";
import Header from "@/components/Header";
import getCurrentUser from "./actions/getCurrentUser";


export default async function Home() {
  const currentUser = await getCurrentUser()
  return (
    <>
    <Header label="Home" />
    <Form placeholder="What is happening?!" currentUser={currentUser} />

    </>
  )
}
