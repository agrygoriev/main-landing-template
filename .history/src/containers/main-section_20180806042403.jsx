import React from "react";
import Route from "react-router-dom/Route";
import MainPage from "./main-page";
import PrivacyPage from "./privacy-page";
import TermsPage from "./terms-page";
import BlogPage from "./blog-page";
import ContactsPage from "./contacts-page";
import TellMeMore from "../components/tell-me-more";
import ArticlePage from "./article-page";
import termsProps from "../terms.json";
import privacyData from "../privacy.json";
import mainPageProps from "../mainpage.json";

const MainSection = props => {
  const privacyProps = {
    data: privacyData,
    colors: props.colors
  };
  console.log(privacyProps);
  const MainPageWithProps = () => {
    return <MainPage {...mainPageProps} colors={props.colors} />;
  };
  const PrivacyPolicyWithProps = props => {
    return <PrivacyPage data={privacyProps} colors={props.colors} />;
  };
  const ContactsPageProps = () => {
    return <ContactsPage {...props} />;
  };
  const blogProps = {
    heading: "Blog",
    subheading: "Let us guide you into the future of personal finance!",
    colors: props.colors,
    text: [
      {
        id: 1,
        heading: "5 main delusions of personal finance management",
        subheading: "",
        image: "article-1.jpg",
        text: `<article class="entry-content">
          <p>Conversations at a coffee table or over lunch usually revolve around politics, movies, music and even hot stock tips. Many
            find discussions around money management either boring or not meant for them. Most of it comes from myths about personal
            finance people have in their mind. Here are 5 common myths and how to deal with it:
        
          </p>
          <h5>Myth 1: Financial planning is not for me</h5>
          <p>
            <strong>Reality:</strong> Whether you have a lot of money or very little money, you need to manage your finances. Financial planning
            allows you to systematically meet your financial goals. You need to give time for your investment to grow. Say you want
            to learn swimming. You will pay for swimming instructor, buy swim suit and spend time practicing in the swimming pool.
            Similarly, you need to spend time understanding money management and financial planning.</p>
          <h5>Myth 2: Save tax through insurance policy</h5>
          <p>
            <strong>Reality:</strong>Every year, most salaried individuals do their tax planning towards the end of the year when they have
            to save tax and show the poofs of their tax-saving investments to their employer. Most individuals end up putting money
            in life insurance products. This is the worst way to save tax. In fact, you are getting trapped into a product that you
            may actually not require. You should first evaluate you financial plan and use tax savings instruments to work for your
            finance.</p>
          <h5>Myth 3: Investing in equity is risky</h5>
          <p>
            <strong>Reality:</strong>Are you one of those who gravitate to guaranteed products? Fixed income products such as fixed deposit
            assure you of guaranteed returns. However, at times, fixed income products, after factoring in inflation and tax, give
            negative returns. Equity, on the other hand, has the ability to give you higher returns but not guaranteed returns than
            the fixed income product. However, it comes with risk. You can look at taking calculated risk. You don’t have to put
            all eggs in one basket. Instead look at diversifying and don’t invest based on stock tips blindly.</p>
          <h5>Myth 4: Term insurance is waste of money</h5>
          <p>
            <strong>Reality:</strong>Firstly, you need to understand that life insurance is for your dependant and not for you. Life insurance
            is basically to ensure that your dependant get the money when you die. They will have sufficient money to survive in
            your absence only if you take adequate cover. You get higher sum assured in term plans by paying a small premium. When
            you opt for insurance plus investment product, you end up paying higher premium for a lower sum assured and the return
            on the product is also small.</p>
          <h5>Myth 5: A financial planner is not required</h5>
          <p>
            <strong>Reality:</strong>Many are scared about numbers and money talk. Then there are those who think they know all about finances.
            However, when it comes to money, you may need a professional to handle your finances. You may not be able to keep a tab
            on all events that happen around you and impact your money. A financial planner will be able to help you navigate through
            different financial products and help you take an informed decision.</p>
        </article>`
      },
      {
        id: 2,
        heading: "What you need to know to be ready for retirement",
        subheading:
          "We all dream of the time when we’ll be able to retire, enjoy life, maybe do a bit of traveling. But, to keep your dreams on track, you need to take steps to ensure that you’ll have enough savings.",
        image: "article-2.jpg",
        text: `<article class="entry-content">
        <h5>1. Do an audit of your debts.</h5>
        <p>How close are you to paying off your mortgage? Do you have credit card debt or personal loans?</p>
        <p>Figure out how long it will take you to pay these off. If you can get debt-free before retirement, you’ll have that much
          more to live on.</p>
        <h5>2. Figure out how much income you’ll have.</h5>
        <p>Are you expecting a company pension? How much will your Social Security payments be? These numbers will help you figure
          out how much you’ll need to save to have the standard of living that you want.</p>
        <h5>3. Reallocate your assets.</h5>
        <p>Most financial analysts say that it is a good idea to move retirement savings into safer and more stable vehicles as retirement
          gets closer. For instance, if you have had money in highly volatile stocks, move some to stocks with a more stable track
          record. You may even wish to move some into investments like Treasury bonds. These produce less income over time. But,
          you will not get caught having to withdraw retirement savings during a downturn.</p>
        <h5>4. Put your savings into overdrive.</h5>
        <p>As you get closer to retirement age, the IRS allows you to put more money into tax-protected investments like IRAs. You
          can make additional catch-up contributions of $1000 to an IRA and up to $6000 in a 401K. Be sure to make contributions
          to both your and your spouse’s accounts to maximize the benefit. If you are eligible for an health savings account (HSA),
          you should consider maxing out your savings there, as well. Contributions to an HSA are made pre-tax, so they lower your
          tax burden. And, unlike FSAs, your contributions to HSAs are yours to keep.
        </p>
        <p>These steps can help put you in the best position. By assessing your current situation, conquering debt and socking away
          all you can, you can better assure a comfortable retirement.</p>
      </article>`
      },
      {
        id: 3,
        heading: "How to manage your money, if you're a millennial",
        subheading:
          "In a recent survey, over half of millennials -- 51% -- said the amount of money they live on is a major cause of stress.",
        image: "article-3.jpg",
        text: `<article class="entry-content">
        <p>Are you a millennial who feels overwhelmed trying to get the most out of your money? With mounting concerns like student
          debt, stagnant wages, a saturated job market and simply trying to pay rent and buy groceries, you could surely be forgiven
          for panicking about your finances. In fact, 41% of millennials between the ages of 18 and 29 said they were unsure of
          what they’re doing when it comes to their financial matters, according to a 2017 GfK Consumer Life survey. And over half
          of millennials -- 51% -- said the amount of money they live on is a major cause of stress. But it doesn’t have to be
          that way. I recently spoke with financial experts on smart budgeting, investing and saving for retirement. Here’s what
          they said:
        </p>
        <h5>On budgeting and saving</h5>
        <h6>
          <em>Eliminate wasteful spending</em>
        </h6>
        <p>If you want to save smart, you need to have an honest self-evaluation of your spending habits – what you really need, versus
          what you can do without. Joanne Bradford, chief marketing officer of SoFi, an online personal finance company that targets
          millennials, said the biggest expenses that destroy young people’s budgets include eating out, vacations and weddings.
        </p>
        <p>“It’s okay to say ‘no’ to a wedding. You don’t always have to say yes to the dress,” Bradford said. It sounds obvious,
          but she added that it’s important to create an actual budget so you can be aware of where your money is going.</p>
        <h6>
          <em>Manage work stress</em>
        </h6>
        <p>How we view our careers has a lot to do with our ability to stick to a budget, said Bradford. Managing problems at work
          that are stress inducing, like dealing with a difficult boss, feeling burned out or being generally unhappy in your current
          role, can affect your overall financial health. According to Bradford, managing your career is a big part of budgeting
          because “stress usually begets bad spending.”</p>
        <h6>
          <em>Embrace technology</em>
        </h6>
        <p>When it comes to managing your money, yes, there's an app for that. According to Jean Chatzky, Know Your Value contributor
          and financial editor for NBC TODAY, mobile applications like “Clarity Money” can help you identify wasteful spending
          patterns. It breaks down your spending from all of your accounts in one place. It even eliminates subscriptions services
          you no longer use in order to curb wasted accounts, saving you money and time. Chatzky also recommends “Digit” and “Stash.”
          These programs first look at your accounts, income and spending patterns. Then they recommend where you can save money
          each month and can even transfer that amount directly to savings. “When you look at your bank balance, that money is
          not there, so you’re not going to spend it,” Chatzky explained.
        </p>
        <h6>
          <em>Refine general advice to your own situation</em>
        </h6>
        <p>Sometimes, the recommended percentages by financial experts on how you should budget your expenses don’t always work for
          everyone.
        </p>
        <p>For example, Chatzky recommends ideally placing 35% of your paycheck into your rent expenses and 15% into transportation
          costs. However, if you live somewhere like New York City with much higher living expenses, that may be impossible. Instead,
          she said, you can rearrange those percentages to fit your situation. Make them work for you.</p>
        <p>Consider living closer to the places you frequent for instance — like your office. “That means that the 15% that I might
          recommend you to spend on transportation can go to 5% and that gives you an extra 10% to funnel into your housing,” she
          explained. The tradeoff allows you to take the original 35% for housing that a financial expert may recommend to 45%
          of your paycheck going to rent because you saved money from transportation costs.</p>
        <h6>
          <em>Always save 15%</em>
        </h6>
        <p>Chatzky advised that there is one rule that is non-negotiable. “You have to be saving 15% of whatever it is you are earning
          all the time,” she told me. “That’s a combo of your cash savings and your retirement savings, and it can count any money
          that your employer is giving you in the way of matching dollars for your retirement, but you’ve got to be saving from
          the time that you are very young.”</p>
        <h5>On investing and retirement</h5>
        <h6>
          <em>Set specific goals and master your cash flow</em>
        </h6>
        <p>“Before anyone can invest, what they first need to do is have a really good understanding and a system for what their financial
          goals are,” said Douglas Boneparth, a millennial financial advisor and president of Bone Fide Wealth. “If you don’t know
          what your goals are and you’re investing, you are throwing a dart into thin air.”</p>
        <p>Your financial goals define how you should approach investing, according to Boneparth. For example, are you working toward
          paying off student loans, saving up to start a family and buy a home or trying to get by as you navigate your career?
          Once you identify your financial goals and determine if they are short term or long term, then you can start finding
          the appropriate approach to investing.</p>
        <p>If your financial goal is something you want to achieve or pay off in four years or less, then “you’re not going to put
          any risk on your money; you’re going to save this cash,” he told me. On the other hand, he says, “If your goals are long
          term, seven to ten years or more, you have time on your side and more than likely, you can take a greater amount of risk.”
          Boneparth added that even when taking financial risk, you should still maintain a diversified portfolio in your investments.</p>
        <h6>
          <em>Investing in retirement</em>
        </h6>
        <p>Although retirement may seem far off, it’s something you should be working toward now. Chatzky said the biggest mistake
          millennials make doesn't stem from not saving for retirement. Rather, it's the fallout from not investing those savings
          for the future. Chatzky added that even though younger workers may be skeptical of the up and down nature of the markets,
          stocks are an important part of retirement savings. “You’ve got 40 to 50 years for the markets to roller coaster, so
          put a good portion of your money in stocks,” she said.</p>
        <p>Chatzky also said it's important to keep your eye on investment costs and diversify by investing in many stocks at the
          same time. You can do that by investing in index funds or exchange traded funds, she explained, pointing to a total stock
          market index fund. "It holds thousands of stocks so you're diversified. One goes down, you're not going to get creamed.
          Another alternative is a target-date retirement fund which will keep you in the right mix of stocks and bonds for your
          age,” she said.</p>
      </article>`
      }
    ]
  };
  const BlogPageWithProps = () => {
    return <BlogPage data={blogProps} />;
  };
  const ArticlePageWithProps = props => {
    return <ArticlePage data={blogProps} {...props} />;
  };
  const TermsPageWithProps = props => {
    return <TermsPage data={termsProps} />;
  };

  const tellMeMoreProps = {
    heading: "So, are you ready? Let’s get started!",
    text:
      "By carefully reading and performing my advices, taking an active role in managing your finances — and looking at ways to maximize your income — you’ll ensure a brighter and secure financial future.",
    btntext: "Tell me more!"
  };
  return (
    <main>
      <Route exact path="/" component={MainPageWithProps} />
      <Route path="/privacy/" component={PrivacyPolicyWithProps} />
      <Route exact path="/blog/" component={BlogPageWithProps} />
      <Route path="/contacts/" component={ContactsPageProps} />
      <Route exact path="/blog/:id" component={ArticlePageWithProps} />
      <Route path="/terms/" component={TermsPageWithProps} />
      <TellMeMore
        heading={tellMeMoreProps.heading}
        text={tellMeMoreProps.text}
        btntext={tellMeMoreProps.btntext}
        colors={props.colors}
      />
    </main>
  );
};
export default MainSection;
