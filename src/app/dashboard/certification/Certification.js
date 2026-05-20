import DataCertification from "../data/DataCertification";
import Certificationcard from "./Certificationcard";

export default function Certification() {
  return (
    <>
      <div className="mt-2 mb-10 bg-white shadow-lg shadow-gray-50 border border-gray-200 rounded-2xl sm:p-4 p-2">
        <div className="pl-2">
          {DataCertification.map((certif, index) => (
            <Certificationcard
              key={index}
              title={certif.title}
              date={certif.date}
              src={certif.src}
              cd_id={certif.cd_id}
            />
          ))}
        </div>
      </div>
    </>
  );
}
