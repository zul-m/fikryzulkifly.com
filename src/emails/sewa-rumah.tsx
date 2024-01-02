import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";

interface SewaRumahEmailProps {
  firstName: string;
  email: string;
  phoneNo: string;
  address: string;
  message: string;
}

export const SewaRumahEmail = ({
  firstName,
  email,
  phoneNo,
  address,
  message,
}: SewaRumahEmailProps) => (
  <Html>
    <Head />
    <Preview>Khidmat ejen hartanah di Kuala Lumpur dan Selangor</Preview>
    <Body style={main}>
      <Container>
        <Section style={logo}>
          <Img
            src="https://www.fikryzulkifly.com/logo.png"
            width={204}
            height={41}
          />
        </Section>
        <Section style={content}>
          <Row style={{ ...boxInfos, paddingBottom: "0" }}>
            <Column>
              <Heading
                as="h2"
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                Hi{" "}
                <span style={{ fontVariantCaps: "small-caps" }}>
                  {firstName}
                </span>
                !
              </Heading>
              <Text style={paragraph}>
                Terima kasih kerana menghubungi kami.
              </Text>
              <Text style={{ ...paragraph, marginTop: -5 }}>
                Berikut adalah maklumat yang telah kami terima:
              </Text>
              <ul>
                <li>
                  <Text style={{ ...paragraph, marginTop: -10 }}>
                    <span style={{ fontWeight: "bold" }}>Nama:</span>{" "}
                    {firstName}
                  </Text>
                </li>
                <li>
                  <Text style={{ ...paragraph, marginTop: -10 }}>
                    <span style={{ fontWeight: "bold" }}>Alamat email:</span>{" "}
                    {email}
                  </Text>
                </li>
                <li>
                  <Text style={{ ...paragraph, marginTop: -10 }}>
                    <span style={{ fontWeight: "bold" }}>Nombor telefon:</span>{" "}
                    {phoneNo}
                  </Text>
                </li>
                <li>
                  <Text style={{ ...paragraph, marginTop: -10 }}>
                    <span style={{ fontWeight: "bold" }}>Alamat kediaman:</span>{" "}
                    {address}
                  </Text>
                </li>
                <li>
                  <Text style={{ ...paragraph, marginTop: -10 }}>
                    <span style={{ fontWeight: "bold" }}>Mesej / Pesanan:</span>{" "}
                    {message}
                  </Text>
                </li>
              </ul>
              <Text style={{ ...paragraph, marginTop: -5 }}>
                Pihak kami akan menghubungi anda dalam masa terdekat.
              </Text>
              <Text style={{ ...paragraph, marginTop: -5 }}>
                Ejen hartanah anda,
                <br />
                <span style={{ fontStyle: "italic" }}>Fikry Zulkifly</span>
                <br />
                <span style={{ fontStyle: "italic" }}>CCI Realty</span>
              </Text>
            </Column>
          </Row>
        </Section>
        <Section style={footer}>
          <Text
            style={{
              padding: "0 30px",
            }}
          >
            Email ini dijana secara automatik. Jika anda mempunyai sebarang
            pertanyaan atau keperluan, sila hubungi atau Whatsapp kami di{" "}
            <span style={{ fontWeight: "bold" }}>+60176515784</span>.
          </Text>
          <Hr style={footerDivider} />
          <Row style={{ width: "50%", margin: "0", padding: "0 30px" }}>
            <Column>
              <Link href="https://www.facebook.com/FikryZulkiflyProperty">
                <Img
                  src="https://www.fikryzulkifly.com/facebook.png"
                  width="20"
                  height="20"
                  alt="Facebook"
                  style={socialMediaIcon}
                />
              </Link>
            </Column>
            <Column>
              <Link href="https://instagram.com/fikryzulkiflyproperty">
                <Img
                  src="https://www.fikryzulkifly.com/instagram.png"
                  width="20"
                  height="20"
                  alt="Instagram"
                  style={socialMediaIcon}
                />
              </Link>
            </Column>
            <Column>
              <Link href="https://t.me/fzpropertylisting">
                <Img
                  src="https://www.fikryzulkifly.com/telegram.png"
                  width="20"
                  height="20"
                  alt="Telegram"
                  style={socialMediaIcon}
                />
              </Link>
            </Column>
            <Column>
              <Link href="https://www.tiktok.com/@fikryzulkiflyproperty">
                <Img
                  src="https://www.fikryzulkifly.com/tik-tok.png"
                  width="20"
                  height="20"
                  alt="Tiktok"
                  style={socialMediaIcon}
                />
              </Link>
            </Column>
            <Column>
              <Link href="https://api.whatsapp.com/send?phone=60176515784">
                <Img
                  src="https://www.fikryzulkifly.com/whatsapp.png"
                  width="20"
                  height="20"
                  alt="Whatsapp"
                  style={socialMediaIcon}
                />
              </Link>
            </Column>
          </Row>
          <Text
            style={{
              fontSize: 13,
              marginTop: 0,
              padding: "0px 30px",
            }}
          >
            © 2023 Fikry
            Zulkifly&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;www.fikryzulkifly.com
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default SewaRumahEmail;

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};

const logo = {
  padding: "30px 20px",
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const boxInfos = {
  padding: "30px",
};

const footer = {
  width: "680px",
  color: "rgb(0,0,0, 0.7)",
};

const divider = {
  margin: "10px 0",
};

const footerDivider = {
  ...divider,
  borderColor: "#d6d8db",
};

const socialMediaIcon = {
  display: "inline",
};
