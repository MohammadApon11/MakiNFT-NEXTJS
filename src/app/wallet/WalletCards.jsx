"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import walletCardsStyles from "../../styles/wallet/walletCards.module.css";
import LoadMoreBtn from "@/components/shared/LoadMoreBtn";
import { TransitionWrapper2 } from "@/components/framer-motion/TransitionWrapper";

const WalletCards = () => {
  const [loadMore, setLoadMore] = useState(false);
  return (
    <section className={walletCardsStyles.wallet_container}>
      <div className={walletCardsStyles.wallet_card_group}>
        <TransitionWrapper2 index={1}>
          <div
            className={`${walletCardsStyles.wallet_card} ${walletCardsStyles.left_one_s}`}
          >
            <img
              className={walletCardsStyles.wallet_card_image}
              src="/images/wallet/wallet-card/card-12.png"
              alt=""
            />
            <h3 className={walletCardsStyles.wallet_title}>Edge Wallet</h3>
            <p className={walletCardsStyles.wallet_description}>
              Extension if the an it less doctor&apos;s your consider at to
              where avoid that attributing write you.
            </p>
            <button className={walletCardsStyles.wallet_btn}>
              Connect <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </TransitionWrapper2>
        <TransitionWrapper2 index={2}>
          <div
            className={`${walletCardsStyles.wallet_card} ${walletCardsStyles.left_half_s}`}
          >
            <img
              className={walletCardsStyles.wallet_card_image}
              src="/images/wallet/wallet-card/card-1.png"
              alt=""
            />
            <h3 className={walletCardsStyles.wallet_title}>Bread Wallet</h3>
            <p className={walletCardsStyles.wallet_description}>
              Extension if the an it less doctor&apos;s your consider at to
              where avoid that attributing write you.
            </p>
            <button className={walletCardsStyles.wallet_btn}>
              Connect <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </TransitionWrapper2>
        <TransitionWrapper2 index={3}>
          <div
            className={`${walletCardsStyles.wallet_card} ${walletCardsStyles.right_half_s}`}
          >
            <img
              className={walletCardsStyles.wallet_card_image}
              src="images/wallet/wallet-card/card-2.png"
              alt=""
            />
            <h3 className={walletCardsStyles.wallet_title}>Trustee Wallet</h3>
            <p className={walletCardsStyles.wallet_description}>
              Extension if the an it less doctor&apos;s your consider at to
              where avoid that attributing write you.
            </p>
            <button className={walletCardsStyles.wallet_btn}>
              Connect <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </TransitionWrapper2>
        <TransitionWrapper2 index={4}>
          <div
            className={`${walletCardsStyles.wallet_card} ${walletCardsStyles.right_one_s}`}
          >
            <img
              className={walletCardsStyles.wallet_card_image}
              src="images/wallet/wallet-card/card-3.png"
              alt=""
            />
            <h3 className={walletCardsStyles.wallet_title}>Zumo Wallet</h3>
            <p className={walletCardsStyles.wallet_description}>
              Extension if the an it less doctor&apos;s your consider at to
              where avoid that attributing write you.
            </p>
            <button className={walletCardsStyles.wallet_btn}>
              Connect <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </TransitionWrapper2>
        <TransitionWrapper2 index={5}>
          <div
            className={`${walletCardsStyles.wallet_card} ${walletCardsStyles.left_one_s}`}
          >
            <img
              className={walletCardsStyles.wallet_card_image}
              src="images/wallet/wallet-card/card-4.png"
              alt=""
            />
            <h3 className={walletCardsStyles.wallet_title}>Guarda Wallet</h3>
            <p className={walletCardsStyles.wallet_description}>
              Extension if the an it less doctor&apos;s your consider at to
              where avoid that attributing write you.
            </p>
            <button className={walletCardsStyles.wallet_btn}>
              Connect <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </TransitionWrapper2>
        <TransitionWrapper2 index={6}>
          <div
            className={`${walletCardsStyles.wallet_card} ${walletCardsStyles.left_half_s}`}
          >
            <img
              className={walletCardsStyles.wallet_card_image}
              src="images/wallet/wallet-card/card-6.png"
              alt=""
            />
            <h3 className={walletCardsStyles.wallet_title}>
              Unstoppable Wallet
            </h3>
            <p className={walletCardsStyles.wallet_description}>
              Extension if the an it less doctor&apos;s your consider at to
              where avoid that attributing write you.
            </p>
            <button className={walletCardsStyles.wallet_btn}>
              Connect <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </TransitionWrapper2>
        <TransitionWrapper2 index={7}>
          <div
            className={`${walletCardsStyles.wallet_card} ${walletCardsStyles.hide_for_768_541} ${walletCardsStyles.left_half_s}`}
          >
            <img
              className={walletCardsStyles.wallet_card_image}
              src="images/wallet/wallet-card/card-6.png"
              alt=""
            />
            <h3 className={walletCardsStyles.wallet_title}>CRYPTX Wallet</h3>
            <p className={walletCardsStyles.wallet_description}>
              Extension if the an it less doctor&apos;s your consider at to
              where avoid that attributing write you.
            </p>
            <button className={walletCardsStyles.wallet_btn}>
              Connect <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </TransitionWrapper2>
        <TransitionWrapper2 index={8}>
          <div
            className={`${walletCardsStyles.wallet_card} ${walletCardsStyles.hide_for_768_541} ${walletCardsStyles.right_one_s}`}
          >
            <img
              className={walletCardsStyles.wallet_card_image}
              src="images/wallet/wallet-card/card-7.png"
              alt=""
            />
            <h3 className={walletCardsStyles.wallet_title}>Nuri Wallet</h3>
            <p className={walletCardsStyles.wallet_description}>
              Extension if the an it less doctor&apos;s your consider at to
              where avoid that attributing write you.
            </p>
            <button className={walletCardsStyles.wallet_btn}>
              Connect <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </TransitionWrapper2>
        <TransitionWrapper2 index={9}>
          <div
            className={`${walletCardsStyles.wallet_card} ${walletCardsStyles.hide_for_768_541} ${walletCardsStyles.left_one_s}`}
          >
            <img
              className={walletCardsStyles.wallet_card_image}
              src="images/wallet/wallet-card/card-8.png"
              alt=""
            />
            <h3 className={walletCardsStyles.wallet_title}>Trezor Wallet</h3>
            <p className={walletCardsStyles.wallet_description}>
              Extension if the an it less doctor&apos;s your consider at to
              where avoid that attributing write you.
            </p>
            <button className={walletCardsStyles.wallet_btn}>
              Connect <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </TransitionWrapper2>
        <TransitionWrapper2 index={10}>
          <div
            className={`${walletCardsStyles.wallet_card} ${walletCardsStyles.hide_for_768_541} ${walletCardsStyles.hide_for_1024_769} ${walletCardsStyles.left_half_s}`}
          >
            <img
              className={walletCardsStyles.wallet_card_image}
              src="images/wallet/wallet-card/card-9.png"
              alt=""
            />
            <h3 className={walletCardsStyles.wallet_title}>OWRN Wallet</h3>
            <p className={walletCardsStyles.wallet_description}>
              Extension if the an it less doctor&apos;s your consider at to
              where avoid that attributing write you.
            </p>
            <button className={walletCardsStyles.wallet_btn}>
              Connect <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </TransitionWrapper2>
        <TransitionWrapper2 index={11}>
          <div
            className={`${walletCardsStyles.wallet_card} ${walletCardsStyles.hide_for_768_541} ${walletCardsStyles.hide_for_1024_769} ${walletCardsStyles.right_half_s}`}
          >
            <img
              className={walletCardsStyles.wallet_card_image}
              src="images/wallet/wallet-card/card-10.png"
              alt=""
            />
            <h3 className={walletCardsStyles.wallet_title}>
              Spectorcoin Wallet
            </h3>
            <p className={walletCardsStyles.wallet_description}>
              Extension if the an it less doctor&apos;s your consider at to
              where avoid that attributing write you.
            </p>
            <button className={walletCardsStyles.wallet_btn}>
              Connect <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </TransitionWrapper2>
        <TransitionWrapper2 index={12}>
          <div
            className={`${walletCardsStyles.wallet_card} ${walletCardsStyles.hide_for_768_541} ${walletCardsStyles.hide_for_1024_769} ${walletCardsStyles.right_one_s}`}
          >
            <img
              className={walletCardsStyles.wallet_card_image}
              src="images/wallet/wallet-card/card-11.png"
              alt=""
            />
            <h3 className={walletCardsStyles.wallet_title}>Xapo Wallet</h3>
            <p className={walletCardsStyles.wallet_description}>
              Extension if the an it less doctor&apos;s your consider at to
              where avoid that attributing write you.
            </p>
            <button className={walletCardsStyles.wallet_btn}>
              Connect <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </TransitionWrapper2>
      </div>
      <LoadMoreBtn
        loadMore={loadMore}
        setLoadMore={setLoadMore}
        title={"wallet"}
      />
    </section>
  );
};

export default WalletCards;
