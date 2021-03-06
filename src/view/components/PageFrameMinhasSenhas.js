import React from "react";

import { membersPages } from "../../model/adminAssets.json";

import UserBar from "./UserBar";
import MenuMinified from "./MenuMinified";
import TitleMembersFrame from "./TitleMembersFrame";
import Footer from "./Footer";
import Stickers from "./Stickers";

export default function PageFrameMinhasSenhas() {

  return (
    <div id="MeuPerfil">
      <UserBar />
      <MenuMinified pages={membersPages} />
      <TitleMembersFrame />
      <main className="row no-gutters px-3">
        <section className="col-12">
          <Stickers/>
        </section>
      </main>
      <Footer />
    </div>
  );
}


