import { GreetingWidget } from '@/components/widgets/GreetingWidget';
import { Container } from '@/components/layout/Container';
import InteractiveSection from '@/components/InteractiveSection';
import { getHelloMessage } from '@/lib/hello'

export const metadata = {
  title: 'Home • MyApp',
}

export default async function Home() {
  const { message } = await getHelloMessage()

  return (
    <Container className="flex flex-col items-center space-y-6">
      <h1 className="text-5xl font-extrabold">Home</h1>
      <GreetingWidget greeting={message} />
      <InteractiveSection greeting={message} />
    </Container>
  )
}