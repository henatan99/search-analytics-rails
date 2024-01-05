class SearchesController < ApplicationController
    protect_from_forgery with: :exception

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
        begin
            @search = Search.new(searches_params)
            ip_address = IpAddress.find_or_create_by(request.remote_ip&.presence || '196.191.112.155')

            @search.ip_address_id = ip_address.id

            if @search.save
                render json: { message: 'Search was successfully created.' }, status: :created
            else
                render json: { errors: @search.errors.full_messages }, status: :unprocessable_entity
            end
        rescue => e
            render json: { error: e.message }, status: :internal_server_error
        end
    end

    private
        def searches_params
            params.require(:search).permit(:query)
        end

end
