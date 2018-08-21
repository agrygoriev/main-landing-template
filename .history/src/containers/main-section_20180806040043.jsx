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

const MainSection = props => {
  // console.log(props);
  const mainPageProps = {
    headline:
      "The main rule of money management is to spend less than you earn, but it requires some sacrifice and sometimes inconvenience. ",
    subheading:
      "Here is good news – you still can enjoying life and obtain your financial independence at the same time. I offer excellent practical knowledge of personal finance and show you, how to manage money in a way that even a total beginner can understand.",
    btntext: "Click to find more",
    colors: props.colors,
    bgimage: "jumbo-bg.jpg"
  };
  const MainPageWithProps = () => {
    return <MainPage {...mainPageProps} />;
  };
  const privacyProps = {
    heading: "Privacy Policy",
    update: "Updated: July 1st, 2018",
    colors: props.colors,
    text: [
      {
        heading:
          "We values the privacy of our readers. We recognize your right to privacy and work hard to protect your private information at all turns.",
        text:
          "Please note that this privacy policy may be updated at any time and will be time stamped periodically to show the newest update time. website will only provide your data to law enforcement and other agencies when presented with a court order or subpoena and in response to law enforcement agency requests. website takes illegal activities, suspected fraud and other forms on online mischief seriously and will provide data to the proper authorities when that type of mischief appears on our website."
      },
      {
        heading: "When is your data collected?",
        text:
          "We collect information from our users in several ways including subscribing to our newsletter, RSS feeds and other opt-in forms, sharing your information when emailing our writers, editors and other site-related email addresses, sharing personal information via the site’s comment forms, and sharing information via Twitter, Facebook and other social media accounts and by following the website on Facebook, Twitter and other social media platforms."
      },
      {
        heading: "How will the website use my data?",
        text:
          "Information collected by the website will be used in a manner determined by the reason for collecting it."
      },
      {
        heading:
          "Analytics (Google Analytics, Parsely, Alexa, Quantcast and others)",
        text:
          "Information provided to website from these platforms are collected outside of our regular scope of business and not collected at the direct request of website. Typical information collected via analytics include operating system being used, internet browser used by our visitors and the screen resolution for which our website is being viewed among other user specific data."
      },
      {
        heading: "User contact info",
        text: "Email addresses, social media accounts, cookies"
      },
      {
        heading: "",
        text:
          "Newsletter provided emails can be used to send daily the website newsletters to our readers upon our discretion. For example, a “hot stories” email may be sent to collect user emails. In this case, our newsletter subscribers will be emailed periodically after they opted-in to the newsletter. Users will be offered an unsubscribe option with each website newsletter sent."
      },
      {
        heading: "",
        text:
          "The email address you enter into our contact form when contacting an editor, writer, member of our advertising team and other agents on the website will be used specifically for correspondence purposes only. The same correspondence rule applies when you contact any of our staff outside of our general contact forms."
      },
      {
        heading: "",
        text:
          "If you choose to comment through our system using Facebook Connect, Twitter or other social media networks, we do not collect your email information; however, we do gain access to your username which can be used for correspondence when appropriate."
      },
      {
        heading: "",
        text:
          "Information collected during surveys, giveaways and other on-site forms of engagement will only be used to contact contest winners, poll participants and other users as need permits."
      },
      {
        heading: "Advertising",
        text:
          "On occasion, the website may provide email addresses and other information to third-party vendors for the purpose of advertising targeting and data analytics. Please note this information is used to provide you with the best possible ads and not for the purpose of direct marketing by our third-party advertising and social networking partners. Our advertisers are not allowed to directly email our readers or use their personal data in a way that violates our Terms of Service and Privacy Policy."
      },
      {
        heading: "",
        text:
          "Please note that our RSS feeds are often maintained by third-party sources who will store your personal information; those RSS feed management and other user management systems will house your personal information under their own privacy policy and terms of service."
      },
      {
        heading: "",
        text:
          "Please note that some advertisers may place a unique cookie on your browser to identify your anonymous account. Those cookies in some cases may provide tracking data to third-party advertisers. Other advertisers on the website may also collect the same information about your personal site usage. If the website’s advertising partners are not serving those ads, our privacy policy will not apply to information collected by those ad partners."
      },
      {
        heading: "Third-party access to your personal information",
        text:
          "The website delivers ads through Doubleclick technology, with advertising offered through multiple advertising networks and other rotating partners. Those agencies often provide frequency capping on the number of ads each user may view each day, that technology requires our third-party advertisers to collect the number of ad views peruse, geographical information and in some cases the operating system, screen resolution, computer OS and other information. Our advertisers to the best of our efforts will not collect your name, address or other personal information."
      },
      {
        heading: "",
        text:
          "We use third-party advertising companies to serve ads and collect information when users visit our site. These companies may use information (not including your name, address, email address or telephone number) about your visits to this and other websites in order to provide advertisements on our site, other websites and other forms of media about goods and services of interest to you. If you would like more information about this practice and to know your choices about not having this information used by these companies, check out http://www.networkadvertising.org/managing/opt_out.asp"
      },
      {
        heading: "The website as a public forum",
        text:
          "At the website we strive to protect your private information; however, please note that any public comments you make are not protected under our site’s policies. For example, Facebook comments are made available to the general public and, if chosen by you, will be displayed on your account."
      },
      {
        heading: "The website comment policy",
        text:
          "At the website, we do not believe in the censorship of comments based on political or ideological point of view, however, we do reserve the right to remove comments that we feel are spam in nature, abusive towards users, contain foul language or appear completely off-topic from the story in which the comment is being left. In a case where a user “flames” the board with many comments left in quick successive order, we reserve the right to remove those comments."
      },
      {
        heading: "",
        text:
          "The website reserves the right to delete a comment (it will, however, still show on your personal Facebook page), remove a comment and ban a user, and simply ban a user from further comments."
      },
      {
        heading: "",
        text:
          "The website does not remove comments by request. Users who left comments will need to log into their own social media account and remove those comments. the website, however, will remove comments based on legal processes, in response to law enforcement and when we feel a user is making a good will attempt to clear up a misunderstanding or protect the privacy and safety of themselves and others."
      },
      {
        heading: "",
        text:
          "The website does not tolerate hate speech, foul language, threats against users, spam and non-relevant comments related to a post."
      },
      {
        heading: "",
        text:
          "All comments and other content contributed to the website shall adhere to the following policy, and may be edited or removed at the website’ discretion if it is deemed to be in violation of this policy."
      },
      {
        heading:
          "Facebook Open Graph Use Policy – the website Social News Reader and Facebook Connect",
        text:
          "In certain cases, the website will ask for your permission to gain access to your Facebook account. If you chose to use our Facebook social news reader your personal Facebook account information will allow the website to post news stories you read from our website to your Facebook news feed. In general, the Facebook social graph allows the website in certain instances to gain access to your Facebook account, however, under no circumstance will we use those permissions to post any information to your Facebook account outside of the scope of our applications originally stated goals."
      },
      {
        heading: "",
        text:
          "Facebook Connect will always ask permission to connect with your Facebook account. The window that appears during your initial login will ask for certain Facebook permissions. By accepting those permissions, you acknowledge how and when the website can connect to your account."
      },
      {
        heading: "",
        text:
          "In certain Facebook permission situations, users will be asked to approve certain information sharing capabilities with the website such as “their likes, their basic information and their ‘about you’ information."
      }
    ]
  };

  const PrivacyPolicyWithProps = props => {
    return <PrivacyPage data={privacyProps} {...props} />;
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
