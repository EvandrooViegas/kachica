import { FaQuoteRight } from "react-icons/fa";
import { Button } from "./ui/button";
import Image from "next/image";

export default function CaseStudyCard({caseStudy, extended}: {caseStudy:any, extended: boolean}) {

  return (
    <div className={`w-full `} >
            <div className={`h-full space-y-2 `}>
              <div className="flex items-center gap-5 bg-secondary/50 backdrop-blur-xl border p-4 sm:p-5">
                <div className="relative w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 flex-shrink-0 rounded-full overflow-hidden">
                  <Image src={caseStudy.src} alt="Case Study" width={64} height={64} className="object-cover w-full h-full" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-base sm:text-base">{caseStudy.name}</span>
                  <span className="text-muted-foreground text-sm sm:text-sm">{caseStudy.services.join(", ")}</span>
                </div>
              </div>

              <div className="space-y-3 bg-secondary/50 backdrop-blur-xl border p-4 sm:p-5">
                <div className="flex flex-col gap-3">
                  {extended ? <span className="text-3xl sm:text-4xl text-primary text-center mx-auto">
                    <FaQuoteRight />
                  </span> : null}
                  <p className={`${extended ? 'text-lg sm:text-lg' : 'text-sm sm:text-sm leading-relaxed'}`}>{caseStudy.testimony}</p>
                </div>

                <Button variant={extended ? 'default' : 'outline'} size={extended ? 'default' : 'sm'}>
                  See More
                </Button>
              </div>
            </div>

          </div>
  );
}
 
// "use client";

// import AnimateElement from "@/components/AnimatedElement";
// import { Button } from "./ui/button";
// import Image from "next/image";
// import { FiArrowUpRight } from "react-icons/fi";

// interface CaseStudyCardProps {
//   name: string;
//   services: string[];
//   explanation: string;
//   testimony: string;
//   link: string;
//   featured?: boolean;
//   delay?: number;
//   src: string
// }

// export default function CaseStudyCard({
//   name,
//   services,
//   explanation,
//   testimony,
//   src,
//   link,
//   featured = false,
//   delay = 0,
// }: CaseStudyCardProps) {
//   const explanationSize = featured ? "text-sm" : "text-xs";
//   const mbExplanation = featured ? "mb-6" : "mb-3";

//   return (
//     <div
//       className={`group flex flex-col gap-3 ${featured ? 'row-span-2' : ''} `}
//     >
//       {/* Top part */}

// <div className="relative min-h-[350px]  ">
//           <Image alt="Project" src={src} className="absolute inset-0 z-[-1] object-cover" fill />
//         </div>

//       {/* Bottom part */}
//       <div className="h-full">
//         <div className={`flex flex-col gap-2`}>
//           <div>
//             <div className="flex items-center justify-between">
//               <h4 className={`font-bold text-primary text-2xl uppercase`}>
//                 {name}
//               </h4>
//               <button
//                 className="p-3 bg-primary text-white"
//               >
//                 <FiArrowUpRight />
//               </button>
//             </div>

//             <div className="flex flex-wrap gap-2 ">
//               {services.map((service, idx) => (
//                 <span
//                   key={idx}
//                   className={`text-xs text-dimmed `}
//                 >
//                   {service}
//                 </span>
//               ))}
//             </div>
//           </div>

//           <div className="flex flex-col">
//             <p className={`text-gray-700 ${explanationSize} ${mbExplanation}`}>
//               {explanation}
//             </p>

//           </div>


//         </div>
//       </div>

//     </div>
//   );
// }
