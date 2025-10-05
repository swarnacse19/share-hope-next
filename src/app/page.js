import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import HowItWorks from "@/components/HowItWorks";
import SuccessStories from "@/components/SuccessStories";


export default function Home() {
  return (
    <>
      <Banner></Banner>
      <Categories></Categories>
      <section id="how-it-works">
        <HowItWorks></HowItWorks>
      </section>
      <section id="success-stories">
        <SuccessStories></SuccessStories>
      </section>
    </>
  );
}
