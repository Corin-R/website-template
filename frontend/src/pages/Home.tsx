import {
    Card,
    Chip,
    Link,
    buttonVariants,
    Tooltip,
    TooltipTrigger,
    Button,
    Separator,
    Label,
    Input,
    ProgressBar,
    Tabs,
} from "@heroui/react";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import {NavLink} from "react-router";
import { useEffect, useMemo, useState } from "react";
import { HealthStatus } from "../components/HealthStatus";
import AppBar from "@/components/Header";

export default function HomePage() {

    return (
    <div className="flex h-screen min-h-0 flex-col text-foreground">
      <AppBar/>

      <main className="w-full flex-1 overflow-auto px-6 py-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-6">
          <section className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
            <Card variant="tertiary">
              <Card.Header className="flex flex-col items-start gap-3">
                <Chip color="accent" variant="soft">
                  Internal Prototype
                </Chip>

                <div>
                  <Card.Title className="text-3xl font-bold tracking-tight">
                    Fancy HeroUI v3 Placeholder Dashboard
                  </Card.Title>
                  <Card.Description className="mt-2 max-w-2xl">
                    A polished placeholder page for testing routes, API calls,
                    theme behavior, and layout structure.
                  </Card.Description>
                </div>
              </Card.Header>

              <Card.Content className="gap-6">
                <div className="flex flex-wrap gap-3">
                  <Button variant="primary">Primary Action</Button>
                  <Button variant="secondary">Secondary Action</Button>
                  <Button variant="outline">Documentation</Button>

                  <Link
                    className={buttonVariants({ variant: "primary" })}
                    href="/api/test-route"
                  >
                    API Test Call
                  </Link>
                    <HealthStatus/>

                </div>

                <Separator />

                <div className="grid gap-4 md:grid-cols-3">
                  <Card variant="default">
                    <Card.Content>
                      <p className="text-sm text-foreground-500">Requests</p>
                      <p className="text-2xl font-semibold">12,482</p>
                      <Chip color="success" size="sm" variant="soft">
                        +18.2%
                      </Chip>
                    </Card.Content>
                  </Card>

                  <Card variant="default">
                    <Card.Content>
                      <p className="text-sm text-foreground-500">Latency</p>
                      <p className="text-2xl font-semibold">84 ms</p>
                      <Chip color="warning" size="sm" variant="soft">
                        Monitoring
                      </Chip>
                    </Card.Content>
                  </Card>

                  <Card variant="default">
                    <Card.Content>
                      <p className="text-sm text-foreground-500">Status</p>
                      <p className="text-2xl font-semibold">Healthy</p>
                      <Chip color="success" size="sm" variant="soft">
                        Online
                      </Chip>
                    </Card.Content>
                  </Card>
                </div>
              </Card.Content>
            </Card>

            <Card>
              <Card.Header>
                <div>
                  <Card.Title>Quick Controls</Card.Title>
                  <Card.Description>
                    Placeholder controls for the future app shell.
                  </Card.Description>
                </div>
              </Card.Header>

              <Card.Content className="gap-4">
                <div className="flex flex-col gap-2">
                  <Label>Search</Label>
                  <Input
                    aria-label="Search prototype data"
                    placeholder="Search prototype data..."
                    variant="secondary"
                  />
                </div>

                <div className="flex items-center justify-between rounded-large border border-divider p-3">
                  <span className="text-sm text-foreground-500">
                    Open command menu
                  </span>
                </div>

                <ProgressBar value={72}>
                  <div className="flex items-center justify-between">
                    <Label>Prototype readiness</Label>
                    <ProgressBar.Output />
                  </div>
                  <ProgressBar.Track>
                    <ProgressBar.Fill />
                  </ProgressBar.Track>
                </ProgressBar>
              </Card.Content>
            </Card>
          </section>

          <section className="grid gap-6 lg:grid-cols-3">
            <Card className="lg:col-span-2">
              <Card.Header>
                <div>
                  <Card.Title>Feature Preview</Card.Title>
                  <Card.Description>
                    A richer HeroUI v3 component playground.
                  </Card.Description>
                </div>
              </Card.Header>

              <Card.Content>
                <Tabs className="w-full">
                  <Tabs.ListContainer>
                    <Tabs.List aria-label="Feature preview tabs">
                      <Tabs.Tab id="overview">
                        Overview
                        <Tabs.Indicator />
                      </Tabs.Tab>

                      <Tabs.Tab id="metrics">
                        <Tabs.Separator />
                        Metrics
                        <Tabs.Indicator />
                      </Tabs.Tab>

                      <Tabs.Tab id="notes">
                        <Tabs.Separator />
                        Notes
                        <Tabs.Indicator />
                      </Tabs.Tab>
                    </Tabs.List>
                  </Tabs.ListContainer>

                  <Tabs.Panel id="overview">
                    <div className="mt-4 grid gap-4 md:grid-cols-2">
                      <Card variant="secondary">
                        <Card.Content>
                          <Card.Title>Route Testing</Card.Title>
                          <Card.Description className="mt-1">
                            Validate frontend pages, API handlers, and
                            navigation behavior from one dashboard.
                          </Card.Description>
                        </Card.Content>
                      </Card>

                      <Card variant="secondary">
                        <Card.Content>
                          <Card.Title>Theme Ready</Card.Title>
                          <Card.Description className="mt-1">
                            Uses HeroUI tokens and layout primitives so it looks
                            good in light and dark mode.
                          </Card.Description>
                        </Card.Content>
                      </Card>
                    </div>
                  </Tabs.Panel>

                  <Tabs.Panel id="metrics">
                    <div className="mt-4 flex flex-col gap-4">
                      <ProgressBar color="accent" value={86}>
                        <div className="flex items-center justify-between">
                          <Label>Model pipeline</Label>
                          <ProgressBar.Output />
                        </div>
                        <ProgressBar.Track>
                          <ProgressBar.Fill />
                        </ProgressBar.Track>
                      </ProgressBar>

                      <ProgressBar color="warning" value={64}>
                        <div className="flex items-center justify-between">
                          <Label>Data freshness</Label>
                          <ProgressBar.Output />
                        </div>
                        <ProgressBar.Track>
                          <ProgressBar.Fill />
                        </ProgressBar.Track>
                      </ProgressBar>

                      <ProgressBar color="success" value={91}>
                        <div className="flex items-center justify-between">
                          <Label>API coverage</Label>
                          <ProgressBar.Output />
                        </div>
                        <ProgressBar.Track>
                          <ProgressBar.Fill />
                        </ProgressBar.Track>
                      </ProgressBar>
                    </div>
                  </Tabs.Panel>

                  <Tabs.Panel id="notes">
                    <div className="mt-4 rounded-large border border-divider p-4 text-sm text-foreground-500">
                      This content is intentionally fake. Replace it later with
                      real app modules, API diagnostics, charts, or internal
                      documentation.
                    </div>
                  </Tabs.Panel>
                </Tabs>
              </Card.Content>
            </Card>

            <Card>
              <Card.Header>
                <div>
                  <Card.Title>Environment</Card.Title>
                  <Card.Description>
                    Fake deployment and runtime metadata.
                  </Card.Description>
                </div>
              </Card.Header>

              <Card.Content className="gap-3">
                <div className="flex justify-between text-sm">
                  <span className="text-foreground-500">Stage</span>
                  <Chip color="warning" size="sm" variant="soft">
                    Prototype
                  </Chip>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-foreground-500">Owner</span>
                  <span>Corin</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-foreground-500">API Route</span>
                  <Link href="/api/test-route">
                    /api/test-route
                  </Link>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-foreground-500">API Route</span>
                  <Link href="/api/test-auth">
                    /api/test-auth
                  </Link>
                </div>
              </Card.Content>

              <Card.Footer>
                <Link
                  className={buttonVariants({
                    fullWidth: true,
                    variant: "primary",
                  })}
                  href="/api/test-route"
                >
                  Open API Test Route
                </Link>
              </Card.Footer>
            </Card>
          </section>
        </div>
      </main>

      <footer className="w-full shrink-0 border-t border-divider bg-surface px-8 py-2 text-xs text-foreground-500">
        <div className="flex justify-between">
          <span className="text-orange-600">
            Private Project! No guarantees!
          </span>
          <span>Version: x.x.x</span>
        </div>
      </footer>
    </div>

    );
}