import React from 'react';
import setUpStyles from "../../styles/home-3/setupwallet.module.css"

const SetUpWallet = () => {
    return (
        <>
      <section className={setUpStyles.set_up_section_container}>
        <div className={setUpStyles.set_up_card_group}>
          <div className={`${setUpStyles.set_up_card} ${setUpStyles.left_one_s}`}>
            <div className={setUpStyles.set_up_card_image_div}>
              <img
                className={setUpStyles.set_card_image}
                src="images/vectors&icon/set-up-1.png"
                alt=""
              />
            </div>
            <h3 className={setUpStyles.set_up_card_title}>Set up Wallet</h3>
            <p className={setUpStyles.set_up_card_description}>
              Consecelite who is help you tosl create setup wallte in store.
              ameat more be elite.
            </p>
          </div>
          <div className={`${setUpStyles.set_up_card} ${setUpStyles.left_half_s}`}>
            <div className={setUpStyles.set_up_card_image_div}>
              <img
                className={setUpStyles.set_card_image}
                src="images/vectors&icon/set-up-2.png"
                alt=""
              />
            </div>
            <h3 className={setUpStyles.set_up_card_title}>Create Collection</h3>
            <p className={setUpStyles.set_up_card_description}>
              Consecelite who is help you tosl create setup wallte in store.
              ameat more be elite.
            </p>
          </div>
          <div className={`${setUpStyles.set_up_card} ${setUpStyles.right_half_s}`}>
            <div className={setUpStyles.set_up_card_image_div}>
              <img
                className={setUpStyles.set_card_image}
                src="images/vectors&icon/set-up-3.png"
                alt=""
              />
            </div>
            <h3 className={setUpStyles.set_up_card_title}>Add Your NFTs</h3>
            <p className={setUpStyles.set_up_card_description}>
              Consecelite who is help you tosl create setup wallte in store.
              ameat more be elite.
            </p>
          </div>
          <div className={`${setUpStyles.set_up_card} ${setUpStyles.right_one_s}`}>
            <div className={setUpStyles.set_up_card_image_div}>
              <img
                className={setUpStyles.set_card_image}
                src="images/vectors&icon/set-up-4.png"
                alt=""
              />
            </div>
            <h3 className={setUpStyles.set_up_card_title}>Ready for Sale</h3>
            <p className={setUpStyles.set_up_card_description}>
              Consecelite who is help you tosl create setup wallte in store.
              ameat more be elite.
            </p>
          </div>
        </div>
      </section>
        </>
    );
};

export default SetUpWallet;