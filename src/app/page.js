import AboutTrustSection from "@/components/AboutTrustSection";
import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import HowItWorks from "@/components/HowItWorks";
import Newsletter from "@/components/Newsletter";
import RecentCampaigns from "@/components/RecentCampaigns";
import SuccessStories from "@/components/SuccessStories";
import TopDonors from "@/components/TopDonors";


export default function Home() {
  return (
    <>
      <Banner></Banner>
      <AboutTrustSection></AboutTrustSection>
      <RecentCampaigns></RecentCampaigns>
      <Categories></Categories>
      <HowItWorks></HowItWorks>
      <TopDonors></TopDonors>
      <section id="success-stories">
        <SuccessStories></SuccessStories>
      </section>
      <Newsletter></Newsletter>
    </>
  );
}
