import Certification from "./certification/Certification";
import Education from "./Education";
import Experience from "./experience/Experience";
import Listproject from "./project/Listprojects";
import Tools from "./tools/Tools";
import CTA from "./CTA";

export default function Dashboard() {
  return (
    <>
      <div>
        <div>
          {/* LIST PROJECT */}

          <div>
            <p className="text-2xl text-gray-600 pt-0 pb-3 font-mono font-bold text-center">
              Some Cool Stuff I Made
            </p>
          </div>
          <div className="grid mt-2">
            <Listproject />
          </div>

          {/* TOOLS */}
          <div className="sm:mt-8">
            <p className="text-2xl text-gray-600 pt-0 pb-3 font-mono font-bold text-center">
              What I Work With
            </p>
          </div>
          <div>
            <Tools />
          </div>

          {/* EXPERIENCE */}
          <div className="sm:mt-1">
            <p className="text-2xl text-gray-600 pt-0 pb-3 font-mono font-bold text-center">
              Experience
            </p>
          </div>
          <div>
            <Experience />
          </div>

          {/* EDUCATION */}
          <div className="sm:mt-1">
            <p className="text-2xl text-gray-600 pt-0 pb-3 font-mono font-bold text-center">
              Education
            </p>
          </div>
          <div>
            <Education />
          </div>

          {/* CERTIFICATIONS */}
          <div className="sm:mt-1">
            <p className="text-2xl text-gray-600 pt-0 pb-3 font-mono font-bold text-center">
              Certifications
            </p>
          </div>
          <div>
            <Certification />
          </div>

          {/* CTA */}
          <div>
            <CTA />
          </div>
        </div>
      </div>
    </>
  );
}
