class SearchesController < ApplicationController

    def index
        ip_address_id = params[:ip_address_id]
        @searches = Search.by_ip_address_id(ip_address_id)
        respond_to do |format|
            format.html
            format.json { render json: @searches }
        end
    end

    def new 
        @search = Search.new
    end

    def create
        @search = Search.new(searches_params)
        @search.ip_address_id = request.remote_ip

        if @search.save
            render json: { message: 'Search was successfully created.' }, status: :created
        else
            render json: { errors: @search.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private
        def searches_params
            params.require(:search).permit(:query, :ip_address_id)
        end

end