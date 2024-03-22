"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import walletCardsStyles from "../../styles/wallet/walletCards.module.css";
import LoadMoreBtn from "@/components/shared/LoadMoreBtn";

const WalletCards = () => {
  const [loadMore, setLoadMore] = useState(false);
  return (
    <section className={walletCardsStyles.wallet_container}>
      <div className={walletCardsStyles.wallet_card_group}>
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
            Extension if the an it less doctor's your consider at to where avoid
            that attributing write you.
          </p>
          <button className={walletCardsStyles.wallet_btn}>
            Connect <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
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
            Extension if the an it less doctor's your consider at to where avoid
            that attributing write you.
          </p>
          <button className={walletCardsStyles.wallet_btn}>
            Connect <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
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
            Extension if the an it less doctor's your consider at to where avoid
            that attributing write you.
          </p>
          <button className={walletCardsStyles.wallet_btn}>
            Connect <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
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
            Extension if the an it less doctor's your consider at to where avoid
            that attributing write you.
          </p>
          <button className={walletCardsStyles.wallet_btn}>
            Connect <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
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
            Extension if the an it less doctor's your consider at to where avoid
            that attributing write you.
          </p>
          <button className={walletCardsStyles.wallet_btn}>
            Connect <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
        <div
          className={`${walletCardsStyles.wallet_card} ${walletCardsStyles.left_half_s}`}
        >
          <img
            className={walletCardsStyles.wallet_card_image}
            src="images/wallet/wallet-card/card-6.png"
            alt=""
          />
          <h3 className={walletCardsStyles.wallet_title}>Unstoppable Wallet</h3>
          <p className={walletCardsStyles.wallet_description}>
            Extension if the an it less doctor's your consider at to where avoid
            that attributing write you.
          </p>
          <button className={walletCardsStyles.wallet_btn}>
            Connect <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
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
            Extension if the an it less doctor's your consider at to where avoid
            that attributing write you.
          </p>
          <button className={walletCardsStyles.wallet_btn}>
            Connect <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
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
            Extension if the an it less doctor's your consider at to where avoid
            that attributing write you.
          </p>
          <button className={walletCardsStyles.wallet_btn}>
            Connect <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
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
            Extension if the an it less doctor's your consider at to where avoid
            that attributing write you.
          </p>
          <button className={walletCardsStyles.wallet_btn}>
            Connect <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
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
            Extension if the an it less doctor's your consider at to where avoid
            that attributing write you.
          </p>
          <button className={walletCardsStyles.wallet_btn}>
            Connect <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
        <div
          className={`${walletCardsStyles.wallet_card} ${walletCardsStyles.hide_for_768_541} ${walletCardsStyles.hide_for_1024_769} ${walletCardsStyles.right_half_s}`}
        >
          <img
            className={walletCardsStyles.wallet_card_image}
            src="images/wallet/wallet-card/card-10.png"
            alt=""
          />
          <h3 className={walletCardsStyles.wallet_title}>Spectorcoin Wallet</h3>
          <p className={walletCardsStyles.wallet_description}>
            Extension if the an it less doctor's your consider at to where avoid
            that attributing write you.
          </p>
          <button className={walletCardsStyles.wallet_btn}>
            Connect <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
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
            Extension if the an it less doctor's your consider at to where avoid
            that attributing write you.
          </p>
          <button className={walletCardsStyles.wallet_btn}>
            Connect <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
      <LoadMoreBtn loadMore={loadMore} setLoadMore={setLoadMore} title={"wallet"} />
    </section>
  );
};

export default WalletCards;
