import React from 'react';
import { Banner, TitleBanner } from '../../components/Banner';
import { WrapperIcons, DivIcons, Icon, Title, TextDescription } from '../../components/SectionIcons';
import { HiComputerDesktop } from "react-icons/hi2";
import { FaHotjar, FaJava } from "react-icons/fa";
import { BannerDois, SectionBanner, SectionBannerPai, SectionBannerDois} from '../../components/BannerDois';

function Home() {
    return (
        <React.Fragment>
            <Banner size={60}>
                <TitleBanner>Minha primeira página com React</TitleBanner>
            </Banner>

            <WrapperIcons>
                <DivIcons>
                    <Icon>
                        <HiComputerDesktop />
                    </Icon>
                    <Title>Somente para desktop</Title>
                    <TextDescription>Vamos aprender como utilizar um framework</TextDescription>
                </DivIcons>
                <DivIcons>
                    <Icon>
                        <FaHotjar />
                    </Icon>
                    <Title>Somente para desktop</Title>
                    <TextDescription>Vamos aprender como utilizar um framework</TextDescription>
                </DivIcons>
                <DivIcons>
                    <Icon>
                        <FaJava />
                    </Icon>
                    <Title>Somente para desktop</Title>
                    <TextDescription>Vamos aprender como utilizar um framework</TextDescription>
                </DivIcons>
            </WrapperIcons>

            <SectionBannerPai>
                <SectionBanner>
                    <BannerDois>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur delectus, voluptatem nesciunt dolor magni cupiditate explicabo corporis amet, perferendis ipsum sint temporibus vero dicta esse qui nihil culpa distinctio nobis adipisci praesentium omnis fuga nulla id veniam? Nam nihil aliquid qui beatae ut incidunt, quae, quidem veritatis, nesciunt porro consequatur!
                        vero dicta esse qui nihil culpa distinctio nobis adipisci praesentium omnis fuga nulla id veniam? Nam nihil aliquid qui beatae ut incidunt, quae, quidem veritatis, nesciunt porro consequatur!
                        vero dicta esse qui nihil culpa distinctio nobis adipisci praesentium omnis fuga nulla id veniam? Nam nihil aliquid qui beatae ut incidunt, quae, quidem veritatis, nesciunt porro consequatur!
                        vero dicta esse qui nihil culpa distinctio nobis adipisci praesentium omnis fuga nulla id veniam? Nam nihil aliquid qui beatae ut incidunt, quae, quidem veritatis, nesciunt porro consequatur!
                    </BannerDois>
                </SectionBanner>


                <SectionBannerDois>
                    <BannerDois></BannerDois>
                </SectionBannerDois>
            </SectionBannerPai>



            <Banner size={40}>
                <TitleBanner>Contato</TitleBanner>
            </Banner>

        </React.Fragment>

    )
}

export default Home;