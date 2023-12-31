import DownloadIcon from "../../assets/images/download-icon.png";
import Resume from "../../assets/documents/Anand Resume 4th IT-1.pdf";
const DownloadResume = () => {
  return (
    <section>
      <a className="download-btn" href={Resume} download="Anand Resume">
        <img
          src={DownloadIcon}
          alt="Download icon"
          className="download-img"
        ></img>
        Download Resume
      </a>
    </section>
  );
};

export default DownloadResume;
