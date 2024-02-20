import styles from "./page.module.css";
import Banner from "@/components/banner";

export default function Home() {
    return (
        <main id={styles.main_container}>
            <Banner />
        </main>
    );
}
