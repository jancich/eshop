import HomeBanner from "./components/Homebanner";
import Container from "./components/container";

export default function Home() {
  return <div className="p-8">
    <Container>
      <div>
      <HomeBanner/>
      </div>
    </Container>
  </div>
}
