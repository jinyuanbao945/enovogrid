import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Solutions from "./pages/Solutions";
import Technologies from "./pages/Technologies";
import Contact from "./pages/Contact";
import "./lib/i18n"; // Initialize i18n

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/solutions"} component={Solutions} />
        <Route path={"/technologies"} component={Technologies} />
        <Route path={"/cases"} component={() => <div className="container py-20 text-center">Case Studies Coming Soon</div>} />
        <Route path={"/resources"} component={() => <div className="container py-20 text-center">Resources Coming Soon</div>} />
        <Route path={"/about"} component={() => <div className="container py-20 text-center">About Us Coming Soon</div>} />
        <Route path={"/contact"} component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
