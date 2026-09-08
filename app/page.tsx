import Link from 'next/link';
import TerminalHero from '@/components/TerminalHero';
import SectionHeading from '@/components/SectionHeading';
import ProjectCard from '@/components/ProjectCard';
import Tag from '@/components/Tag';
import StatusDot from '@/components/StatusDot';
import { site } from '@/data/site';
import { experience } from '@/data/experience';
import { education } from '@/data/education';
import { projects } from '@/data/projects';
import { beyond } from '@/data/beyond';
import { skillGroups } from '@/data/skills';
// import { getAllPosts } from '@/lib/posts'; // re-enable with the WRITING section below

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);
  // const latestPosts = getAllPosts().slice(0, 3); // re-enable with the WRITING section below

  return (
    <main>
      <TerminalHero />

      {/* ABOUT */}
      <section id="about" className="border-b border-ink-700">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <SectionHeading index="01" command="cat about.md" title="About" color="mint" />
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
            <div className="space-y-4 text-[0.95rem] leading-relaxed text-paper-100/70 sm:text-base">
              <p>
                I am currently working as a Data Scientist in the Commercial Marketing Decision Sciences team here at American Express.  
                focusing on ranking and propensity models for commercial and consumer card offers. I have also worked on an 
                end-to-end project involving the creation and validation of a multi-offer ranking framework for Email channel which replaced
                3 XGBoost models with 2 segmentations solutions.
              </p>
              <p>
                I had graduated from IIT Kanpur with a B.Tech in Materials Science and Engineering, 
                where I also explored courses ranging across domains like Control Systems, Machine Learning, NLP, and Reinforcement Learning. 
                My academic journey involved extensive involvement with Aerial Robotics as a Team Head and other associations like Astronomy, Quiz and Programming club. 
                My interest in Astronomy led me to participate in various Inter IIT Tech Meets with ISRO, working on 
                challenges like Lunar Atlas creation from Chandrayaan Orbiter imagery and Web-Based X-Ray Burst Identification.
              </p>
              <p>
                Outside of work, I&apos;m usually chasing a good badminton or lawn tennis match. I&apos;m
                also into photography — mostly street and still life — and have been learning my
                way around a Fujifilm X-T50. The rest of my time goes to watching films (I log them sometimes
                on{' '}
                <a
                  href={site.social.letterboxd}
                  target="_blank"
                  rel="noreferrer"
                  className="border-b border-mint-400/40 text-paper-100/85 hover:text-mint-400"
                >
                  Letterboxd
                </a>{' '}
                — an ardent cinephile), and occasionally reading murder mysteries as well as
                fumbling through a tune on the keyboard.
              </p>
            </div>
            <div className="space-y-6">
              <dl className="divide-y divide-ink-800 border-y border-ink-800 font-mono text-sm">
                {[
                  ['role', site.role],
                  ['based in', "Gurugram, India"]
                  // ['focus', 'Ranking, propensity models, interpretability'],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 py-3">
                    <dt className="text-paper-100/40">{k}</dt>
                    <dd className="text-right text-paper-100/85">{v}</dd>
                  </div>
                ))}
              </dl>
              <div>
                <p className="mb-3 font-mono text-xs uppercase tracking-widest text-paper-100/40">
                  toolbelt
                </p>
                <div className="space-y-4">
                  {skillGroups.map((group) => (
                    <div key={group.label}>
                      <p className="mb-2 text-xs text-paper-100/45">{group.label}</p>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <Tag key={item}>{item}</Tag>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORK / EXPERIENCE — framed as a release changelog */}
      <section id="work" className="border-b border-ink-700 bg-ink-900/30">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <SectionHeading index="02" command="git log --oneline experience" title="Work" color="coral" />
          <div className="space-y-10">
            {experience.map((role, i) => (
              <div key={role.version} className="grid gap-4 sm:grid-cols-[110px_1fr]">
                <div className="flex sm:flex-col sm:items-start items-center gap-3 sm:gap-1">
                  <span className="rounded-sm border border-coral-400/30 bg-coral-400/10 px-2 py-0.5 font-mono text-xs text-coral-400">
                    {role.version}
                  </span>
                  <span className="font-mono text-xs text-paper-100/40">{role.range}</span>
                </div>
                <div className={i !== experience.length - 1 ? 'border-b border-ink-800 pb-10' : ''}>
                  <h3 className="text-lg font-semibold text-paper-50">{role.role}</h3>
                  <p className="mt-1 font-mono text-xs text-paper-100/45">{role.org}</p>
                  <ul className="mt-4 space-y-2">
                    {role.changes.map((change) => (
                      <li key={change} className="flex gap-2 text-sm text-paper-100/70">
                        <span className="mt-1 text-coral-400">+</span>
                        <span>{change}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    {role.stack.map((s) => (
                      <Tag key={s}>{s}</Tag>
                    ))}
                    {role.href && (
                      <a
                        href={role.href}
                        target="_blank"
                        rel="noreferrer"
                        className="font-mono text-xs text-coral-400 hover:text-paper-50"
                      >
                        view source ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="border-b border-ink-700">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <SectionHeading index="03" command="cat education.log" title="Education" color="amber" />
          <div className="grid gap-px overflow-hidden border border-ink-700 bg-ink-800 sm:grid-cols-2">
            {education.map((entry) => (
              <div key={entry.degree} className="bg-ink-950 p-6">
                <p className="font-mono text-xs text-paper-100/40">{entry.range}</p>
                <h3 className="mt-2 text-lg font-semibold text-paper-50">{entry.degree}</h3>
                {entry.org && <p className="mt-1 font-mono text-xs text-amber-400">{entry.org}</p>}
                <p className="mt-4 text-sm text-paper-100/65">{entry.detail}</p>
                <ul className="mt-4 space-y-1.5">
                  {entry.tags.map((tag) => (
                    <li key={tag} className="flex gap-2 font-mono text-xs text-paper-100/55">
                      <span className="text-amber-400">›</span>
                      <span>{tag}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS PREVIEW */}
      <section className="border-b border-ink-700 bg-ink-900/30">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <SectionHeading index="04" command="ls projects/" title="Projects" color="violet" />
          <div className="grid gap-5 sm:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <Link
            href="/projects"
            className="mt-8 inline-flex items-center gap-2 font-mono text-sm text-violet-400 hover:text-paper-50"
          >
            cat projects/*.md (read the full writeups) →
          </Link>
        </div>
      </section>

      {/* BEYOND WORK — hidden entirely until data/beyond.ts has real entries. */}
      {beyond.length > 0 && (
        <section id="beyond" className="border-b border-ink-700">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <SectionHeading index="05" command="cat ~/.plan" title="Beyond work" color="mint" />
            <div className="grid gap-6 sm:grid-cols-2">
              {beyond.map((item) => (
                <div key={item.title} className="flex gap-4 border border-ink-800 bg-ink-900/40 p-5">
                  <StatusDot color="mint" />
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-paper-100/40">
                      {item.label}
                    </p>
                    <h3 className="mt-1 text-base font-semibold text-paper-50">{item.title}</h3>
                    <p className="mt-2 text-sm text-paper-100/65">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* BLOG PREVIEW — commented out for now. To bring it back: uncomment this
          block plus the `getAllPosts` import and `latestPosts` line above, and
          the "blog" entry in components/NavBar.tsx's `links` array.
      <section className="bg-ink-900/30">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <SectionHeading index="06" command="tail -3 blog.log" title="Writing" color="coral" />
          <div className="divide-y divide-ink-800 border-y border-ink-800">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-6"
              >
                <span className="font-mono text-xs text-paper-100/40 sm:w-28 sm:flex-none">
                  {post.date}
                </span>
                <span className="font-medium text-paper-100/85 group-hover:text-mint-400">
                  {post.title}
                </span>
                <span className="font-mono text-xs text-paper-100/35 sm:ml-auto">
                  {post.readingTime}
                </span>
              </Link>
            ))}
          </div>
          <Link
            href="/blog"
            className="mt-8 inline-flex items-center gap-2 font-mono text-sm text-coral-400 hover:text-paper-50"
          >
            git log --all (view every post) →
          </Link>
        </div>
      </section>
      */}
    </main>
  );
}
