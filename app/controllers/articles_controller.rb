class ArticlesController < ApplicationController
    before_action :authenticate_user!, except: [:index, :show]
    before_action :set_article, only: [:show, :edit, :update, :destroy]
    before_action :authorize_user!, only: [:edit, :update, :destroy]

    def index
        @articles = Article.all
    end

    def new 
        @article = current_user.articles.build
    end

    def create
        @article = current_user.articles.build(article_params)

        if @article.save
            redirect_to @article, notice: 'Article was successfully created'
        else
            render :new, status: :unprocessable_entity 
        end
    end

    def show
        @article = Article.find(params[:id])
    end

    def edit
        @article = Article.find(params[:id])
    end

    def update
        @article = Article.find(params[:id])

        if @article.update(article_params)
            redirect_to @article
        else
            render :edit, status: :unprocessable_entity
        end
    end

    def destroy
        @article = Article.find(params[:id])
        @article.destroy

        redirect_to root_path, status: :see_other
    end

    private
        def article_params
            params.require(:article).permit(:title, :body)
        end

        def set_article
            @article = Article.find(params[:id])
        end

        def authorize_user!
            redirect_to articles_path, alert: "You are not the author of this article" unless  current_user == @article.user
        end
end
