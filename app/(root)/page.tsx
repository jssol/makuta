import React from 'react'
import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSidebar from '@/components/RightSidebar';
import { getLoggedInUser } from '@/lib/actions/user.actions';

const Home = async () => {
  const loggedIn = await getLoggedInUser();

  return (
    <section className="home">
      <div className="home-content">
      <header className="home-header">
        <HeaderBox
        type="greeting"
        title="Welcome,"
        user={loggedIn?.name || "Guest"}
        subtext="Access and manage your account and transactions efficiently."
        />

        <TotalBalanceBox
        accounts={[]}
        totalBanks={1}
        totalCurrentBalance={1250.35}
        />
      </header>

      RECENT TRANSACTIONS
      </div>

      <RightSidebar
      user={loggedIn}
      transactions={[]}
      banks={[
        {
        $id: "bank1",
        accountId: "acc1",
        bankId: "bank_id_1",
        accessToken: "access_token_1",
        fundingSourceUrl: "https://example.com/funding1",
        userId: "user1",
        sharableId: "share1",
        id: "acc1",
        availableBalance: 100.00,
        currentBalance: 124.50,
        officialName: "Sample Bank Account 1",
        mask: "1234",
        institutionId: "inst1",
        name: "Checking",
        type: "depository",
        subtype: "checking",
        appwriteItemId: "item1",
        },
        {
        $id: "bank2",
        accountId: "acc2",
        bankId: "bank_id_2",
        accessToken: "access_token_2",
        fundingSourceUrl: "https://example.com/funding2",
        userId: "user1",
        sharableId: "share2",
        id: "acc2",
        availableBalance: 650.00,
        currentBalance: 671.50,
        officialName: "Sample Bank Account 2",
        mask: "5678",
        institutionId: "inst2",
        name: "Savings",
        type: "depository",
        subtype: "savings",
        appwriteItemId: "item2",
        }
      ]}
      />
    </section>
  );
};

export default Home;
