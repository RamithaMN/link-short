import type { Metadata } from "next";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import {
  ArrowRight,
  BarChart3,
  LayoutDashboard,
  Link2,
  Lock,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Link Shortener – Short, memorable links in seconds",
  description:
    "Turn long URLs into short, shareable links and manage them all from one simple dashboard.",
};

const features = [
  {
    icon: Link2,
    title: "Instant Link Shortening",
    description:
      "Paste a long URL and get a short, shareable link in a single step.",
  },
  {
    icon: LayoutDashboard,
    title: "Personal Dashboard",
    description:
      "Keep every link you create in one place, ready to copy, review and manage.",
  },
  {
    icon: Lock,
    title: "Secure Accounts",
    description:
      "Sign in with Clerk. Your links are tied to your account and only you can manage them.",
  },
  {
    icon: Zap,
    title: "Fast Redirects",
    description:
      "Short links resolve quickly so your audience reaches the destination without delay.",
  },
  {
    icon: BarChart3,
    title: "Link Analytics",
    description:
      "Understand how your links perform with click insights.",
    comingSoon: true,
  },
];

const steps = [
  {
    title: "Sign Up",
    description: "Create your free account in seconds with secure sign-in.",
  },
  {
    title: "Shorten",
    description: "Paste your long URL and get a short link instantly.",
  },
  {
    title: "Share",
    description: "Copy your link, share it anywhere and manage it any time.",
  },
];

export default async function Home() {
  const { userId } = await auth();

  if (userId) {
    redirect("/dashboard");
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-950 to-zinc-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-24">
        <div className="flex flex-col items-center text-center space-y-8">
          <Badge variant="secondary" className="px-3 py-1 text-sm">
            Free to get started
          </Badge>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl">
            Shorten Your Links,
            <span className="block text-primary">Amplify Your Reach</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl">
            Turn long, messy URLs into short, memorable links and manage all of
            them from one simple dashboard.
          </p>
          <div className="flex gap-4 flex-col sm:flex-row">
            <SignUpButton mode="modal">
              <Button size="lg" className="text-lg px-8 py-6">
                Get Started Free
                <ArrowRight />
              </Button>
            </SignUpButton>
            <SignInButton mode="modal">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6"
              >
                Sign In
              </Button>
            </SignInButton>
          </div>

          {/* Illustrative preview of a shortened link */}
          <Card className="w-full max-w-2xl bg-zinc-900/50 border-zinc-800 text-left">
            <CardContent className="space-y-4 p-6">
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-wide text-zinc-500">
                  Original URL
                </p>
                <p className="truncate text-zinc-400">
                  https://example.com/blog/2025/a-very-long-article-title?utm_source=newsletter&utm_campaign=launch
                </p>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-primary/20 bg-primary/5 p-3">
                <Link2 className="h-5 w-5 shrink-0 text-primary" />
                <p className="font-mono text-lg text-white">
                  yourdomain.com/<span className="text-primary">launch</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Everything You Need for Better Links
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            A focused set of tools to create, share and manage your shortened
            links
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, description, comingSoon }) => (
            <Card key={title} className="bg-zinc-900/50 border-zinc-800">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <Icon className="w-10 h-10 text-primary mb-2" />
                  {comingSoon && <Badge variant="outline">Coming soon</Badge>}
                </div>
                <CardTitle className="text-white">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Get started in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map(({ title, description }, index) => (
            <div key={title} className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-3xl font-bold text-primary">
                  {index + 1}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="text-zinc-400">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 pb-32">
        <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
          <CardContent className="flex flex-col items-center text-center space-y-6 py-16 px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Simplify Your Links?
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl">
              Create your free account and start shortening links in seconds.
            </p>
            <SignUpButton mode="modal">
              <Button size="lg" className="text-lg px-8 py-6">
                Start Shortening Now
              </Button>
            </SignUpButton>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
