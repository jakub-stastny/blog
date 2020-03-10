FROM ruby

ENV PORT=5000

WORKDIR /usr/src/app

COPY Gemfile Gemfile.lock ./
RUN bundle update --bundler
RUN bundle install
COPY . .

CMD ["bundle", "exec", "config.ru", "--port", $PORT]
