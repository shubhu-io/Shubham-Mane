import { motion } from 'framer-motion'

const fadeIn = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
}

export default function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto px-4 py-12"
    >
      <div className="card-glow p-8 md:p-12">
        {/* Header */}
        <motion.div {...fadeIn} className="text-center mb-8 border-b border-gray-200 dark:border-[#30363d] pb-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">SHUBHAM MANE</h1>
          <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 mb-1">
            AWS Cloud Engineer | DevOps Engineer | Cloud Support Engineer | SRE (Entry-Level)
          </p>
          <p className="text-xs text-gray-400">
            Chhatrapati Sambhaji Nagar (Aurangabad), Maharashtra 431001 | +91 7218306178 | shubhamane10@gmail.com
          </p>
          <p className="text-xs text-blue-600 dark:text-blue-400">
            linkedin.com/in/shubham-mane-dev | github.com/shubhu-io
          </p>
        </motion.div>

        {/* Professional Summary */}
        <motion.div {...fadeIn} transition={{ delay: 0.05 }} className="mb-8">
          <h2 className="text-lg font-bold uppercase tracking-wider mb-3 text-blue-600 dark:text-blue-400 border-b border-gray-200 dark:border-[#30363d] pb-1">
            Professional Summary
          </h2>
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            Entry-level AWS Cloud/DevOps Engineer with a B.Tech in Computer Science and hands-on experience
            designing, provisioning, and automating cloud infrastructure on AWS (EC2, VPC, IAM, S3, EBS, EFS, RDS,
            Auto Scaling, ALB, CloudWatch). Skilled in Infrastructure as Code with Terraform, Linux (Ubuntu) system
            administration, Python and SQL/MySQL, networking fundamentals, and automation scripting. Built and
            documented multiple end-to-end cloud projects covering high-availability architecture, IaC provisioning,
            and backup/disaster-recovery automation. Strong troubleshooting mindset, fast learner, and eager to
            contribute to a cloud, DevOps, or SRE team.
          </p>
        </motion.div>

        {/* Technical Skills */}
        <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="mb-8">
          <h2 className="text-lg font-bold uppercase tracking-wider mb-3 text-blue-600 dark:text-blue-400 border-b border-gray-200 dark:border-[#30363d] pb-1">
            Technical Skills
          </h2>
          <div className="space-y-2 text-sm">
            <div>
              <span className="font-semibold">Cloud (AWS):</span>{' '}
              <span className="text-gray-700 dark:text-gray-300">EC2, VPC, IAM, S3, EBS, EFS, RDS, Auto Scaling, Application Load Balancer (ALB), CloudWatch</span>
            </div>
            <div>
              <span className="font-semibold">Infrastructure as Code:</span>{' '}
              <span className="text-gray-700 dark:text-gray-300">Terraform</span>
            </div>
            <div>
              <span className="font-semibold">Operating Systems:</span>{' '}
              <span className="text-gray-700 dark:text-gray-300">Linux (Ubuntu), Windows</span>
            </div>
            <div>
              <span className="font-semibold">Programming & Scripting:</span>{' '}
              <span className="text-gray-700 dark:text-gray-300">Python, Shell Scripting (Basic)</span>
            </div>
            <div>
              <span className="font-semibold">Database:</span>{' '}
              <span className="text-gray-700 dark:text-gray-300">SQL, MySQL</span>
            </div>
            <div>
              <span className="font-semibold">Version Control:</span>{' '}
              <span className="text-gray-700 dark:text-gray-300">Git, GitHub</span>
            </div>
            <div>
              <span className="font-semibold">Concepts:</span>{' '}
              <span className="text-gray-700 dark:text-gray-300">Networking Fundamentals, Cloud Computing, Infrastructure as Code (IaC), Problem Solving</span>
            </div>
            <div>
              <span className="font-semibold">Tools:</span>{' '}
              <span className="text-gray-700 dark:text-gray-300">Visual Studio Code, Jupyter Notebook, Anaconda</span>
            </div>
          </div>
        </motion.div>

        {/* Cloud Engineering Experience */}
        <motion.div {...fadeIn} transition={{ delay: 0.15 }} className="mb-8">
          <h2 className="text-lg font-bold uppercase tracking-wider mb-3 text-blue-600 dark:text-blue-400 border-b border-gray-200 dark:border-[#30363d] pb-1">
            Cloud Engineering Experience (Hands-On Projects)
          </h2>
          <div className="space-y-5">
            <div>
              <h3 className="font-semibold text-sm">AWS Highly Available Web Infrastructure</h3>
              <p className="text-xs text-gray-500 mb-1">Personal Cloud Lab</p>
              <ul className="text-sm text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
                <li>Designed a custom VPC with public/private subnets, an Internet Gateway, and route tables to segment application and data tiers per AWS Well-Architected practices.</li>
                <li>Provisioned and secured EC2 instances with IAM roles and Security Groups enforcing least-privilege access; built reusable AMIs to standardize deployments.</li>
                <li>Attached EBS volumes and configured Amazon EFS shared storage mounted across multiple EC2 instances for persistent, scalable storage.</li>
                <li>Deployed an Application Load Balancer with an Auto Scaling Group to distribute traffic and sustain high availability during instance failure or load spikes.</li>
                <li>Integrated Amazon RDS as the backend database and configured CloudWatch monitoring and alarms for proactive performance and health tracking.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-sm">Infrastructure Automation with Terraform (IaC)</h3>
              <p className="text-xs text-gray-500 mb-1">Personal Cloud Lab</p>
              <ul className="text-sm text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
                <li>Automated end-to-end provisioning of EC2, VPC, IAM, Security Groups, S3, EBS, EFS, ALB, and Auto Scaling resources using Terraform, eliminating manual console setup.</li>
                <li>Built modular, reusable Terraform modules with structured variables, outputs, and providers, and managed remote state files for consistent, repeatable deployments.</li>
                <li>Applied Infrastructure as Code best practices to version-control infrastructure changes and reduce configuration drift across environments.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-sm">CloudVault - Automated Backup & Disaster Recovery</h3>
              <p className="text-xs text-gray-500 mb-1">github.com/shubhu-io/CloudVault-DR-Automation</p>
              <ul className="text-sm text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
                <li>Built an automated backup and disaster-recovery pipeline using AWS S3 and PowerShell that compresses, uploads, and versions data.</li>
                <li>Designed a restore workflow to list, retrieve, and extract the latest backup from S3, enabling fast recovery from data loss or system failure.</li>
                <li>Administered Ubuntu Linux servers - SSH access, user/permission policies, package installs, and NFS/EFS mounts - and monitored logs to troubleshoot issues.</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="mb-8">
          <h2 className="text-lg font-bold uppercase tracking-wider mb-3 text-blue-600 dark:text-blue-400 border-b border-gray-200 dark:border-[#30363d] pb-1">
            Experience
          </h2>
          <div>
            <div className="flex items-start justify-between mb-1">
              <h3 className="font-semibold text-sm">AI/ML Intern</h3>
              <span className="text-xs text-gray-500">Jan 2025</span>
            </div>
            <p className="text-xs text-blue-600 dark:text-blue-400 mb-1">NDI Techsys</p>
            <ul className="text-sm text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
              <li>Maintained technical documentation and tracked project tasks across the SDLC, supporting on-time delivery of AI/ML initiatives in a cross-functional team.</li>
              <li>Contributed to data handling and analytical model workflows, supporting experimentation, evaluation, and reproducibility of results.</li>
              <li>Coordinated with engineering and product stakeholders to clarify requirements, applying structured problem-solving transferable to cloud/DevOps workflows.</li>
            </ul>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div {...fadeIn} transition={{ delay: 0.25 }} className="mb-8">
          <h2 className="text-lg font-bold uppercase tracking-wider mb-3 text-blue-600 dark:text-blue-400 border-b border-gray-200 dark:border-[#30363d] pb-1">
            Certifications
          </h2>
          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
            <li>Ubuntu Linux Professional - Canonical</li>
            <li>DevOps Foundations - LinkedIn Learning</li>
            <li>Wells Fargo Software Engineering Job Simulation - Forage</li>
            <li>Using Python to Interact with the Operating System - Google</li>
            <li>Learning GitHub - LinkedIn Learning</li>
          </ul>
        </motion.div>

        {/* Education */}
        <motion.div {...fadeIn} transition={{ delay: 0.3 }} className="mb-8">
          <h2 className="text-lg font-bold uppercase tracking-wider mb-3 text-blue-600 dark:text-blue-400 border-b border-gray-200 dark:border-[#30363d] pb-1">
            Education
          </h2>
          <div className="space-y-3">
            <div>
              <div className="flex items-start justify-between mb-1">
                <h3 className="font-semibold text-sm">B.Tech, Computer Science</h3>
                <span className="text-xs text-gray-500">CGPA: 7.65</span>
              </div>
              <p className="text-xs text-blue-600 dark:text-blue-400">P.E.S. College of Engineering, Chhatrapati Sambhaji Nagar, Maharashtra</p>
            </div>
            <div>
              <h3 className="font-semibold text-sm">Higher Secondary Certificate (H.S.C.)</h3>
              <p className="text-xs text-blue-600 dark:text-blue-400">Milind College of Science, Chhatrapati Sambhaji Nagar, Maharashtra</p>
            </div>
            <div>
              <h3 className="font-semibold text-sm">Secondary School Certificate (S.S.C.)</h3>
              <p className="text-xs text-blue-600 dark:text-blue-400">Little Flower High School, Chhatrapati Sambhaji Nagar, Maharashtra</p>
            </div>
          </div>
        </motion.div>

        {/* Languages */}
        <motion.div {...fadeIn} transition={{ delay: 0.35 }}>
          <h2 className="text-lg font-bold uppercase tracking-wider mb-3 text-blue-600 dark:text-blue-400 border-b border-gray-200 dark:border-[#30363d] pb-1">
            Languages
          </h2>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            English (C1) | Marathi (Native) | Hindi (B1)
          </p>
        </motion.div>
      </div>

      {/* Print button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => window.print()}
          className="btn-primary"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
          Print Resume
        </button>
      </div>
    </motion.div>
  )
}
