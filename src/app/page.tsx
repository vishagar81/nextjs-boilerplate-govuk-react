'use client';

import { Button, Input } from 'govuk-react';

const HomePage = () => (
  <div>
    <section className="bg-white px-4 dark:bg-gray-900">
      <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
        <div className="mx-auto place-self-center">
          <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
            Ref Admin
          </h1>
        </div>
      </div>
    </section>
    <div className="mx-auto mt-4 px-4 max-w-screen-lg">
      <h2 className="text-bold mt-8 mb-10 text-3xl">Landing Page</h2>
      <Input
        className="govuk-input--width-30"
        autoComplete="postal-code"
        id="input-with-autocomplete-attribute"
        label={{
          children: 'Search Users'
        }}
        placeholder="Search users configured in system"
        name="postcode"
        type="text"
      />
      <Button>Search</Button>
    </div>
  </div>
);

export default HomePage;
