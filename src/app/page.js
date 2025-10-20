import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import HowItWorks from "@/components/HowItWorks";
import Newsletter from "@/components/Newsletter";
import RecentCampaigns from "@/components/RecentCampaigns";
import SuccessStories from "@/components/SuccessStories";


export default function Home() {
  return (
    <>
      <Banner></Banner>
      <RecentCampaigns></RecentCampaigns>
      <Categories></Categories>
      <HowItWorks></HowItWorks>
      <section id="success-stories">
        <SuccessStories></SuccessStories>
      </section>
      <Newsletter></Newsletter>
    </>
  );
}
