from rest_framework.generics import (
    RetrieveUpdateDestroyAPIView,
    ListCreateAPIView,
)
# from rest_framework.permissions import IsAuthenticated

from django.http import FileResponse
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings

import os

import json

# locale imports
from .models import (
    WorkModel,
    MaterialModel,
    WorksMaterialsModel,
)
# from .permissions import IsOwnerOrReadOnly
from .serializers import (
    WorkSerializer,
    MaterialSerializer,
    WorksMaterialsSerializer,
)
from .pagination import CustomPagination
from .services import (
    create_word_file,
    create_excel_file,
    add_total_types,
)


class ListCreateWorkModelAPIView(ListCreateAPIView):
    serializer_class = WorkSerializer
    queryset = WorkModel.objects.all()
    # permission_classes = [IsAuthenticated]
    pagination_class = CustomPagination

    def perform_create(self, serializer):
        # Assign the user who created the movie
        serializer.save(creator=self.request.user)


class RetrieveUpdateDestroyWorkModelAPIView(RetrieveUpdateDestroyAPIView):
    serializer_class = WorkSerializer
    queryset = WorkModel.objects.all()
    # permission_classes = [IsAuthenticated, IsOwnerOrReadOnly]


class ListCreateMaterialModelAPIView(ListCreateAPIView):
    serializer_class = MaterialSerializer
    queryset = MaterialModel.objects.all()
    # permission_classes = [IsAuthenticated]
    pagination_class = CustomPagination

    def perform_create(self, serializer):
        # Assign the user who created the movie
        serializer.save(creator=self.request.user)


class RetrieveUpdateDestroyMaterialModelAPIView(RetrieveUpdateDestroyAPIView):
    serializer_class = MaterialSerializer
    queryset = MaterialModel.objects.all()
    # permission_classes = [IsAuthenticated, IsOwnerOrReadOnly]


class ListCreateWorksMaterialsModelAPIView(ListCreateAPIView):
    serializer_class = WorksMaterialsSerializer
    queryset = WorksMaterialsModel.objects.all()
    # permission_classes = [IsAuthenticated]
    pagination_class = CustomPagination

    def perform_create(self, serializer):
        # Assign the user who created the movie
        serializer.save(creator=self.request.user)


class RetrieveUpdateDestroyWorksMaterialsModelAPIView(
    RetrieveUpdateDestroyAPIView,
):
    serializer_class = WorksMaterialsSerializer
    queryset = WorksMaterialsModel.objects.all()
    # permission_classes = [IsAuthenticated, IsOwnerOrReadOnly]


@csrf_exempt
def get_word_file(request):
    if request.method == "POST":
        body = json.loads(request.body.decode("utf-8"))
        total_price = add_total_types(body)
        create_word_file(
            body["workData"],
            body["materialData"],
            total_price,
            os.path.join(settings.BASE_DIR, "files/template.docx"),
            os.path.join(settings.BASE_DIR, "files/finish.docx"),
        )
        file = open("files/finish.docx", "rb")
        return FileResponse(file)


@csrf_exempt
def get_excel_file(request):
    if request.method == "POST":
        body = json.loads(request.body.decode("utf-8"))
        create_excel_file(
            body["workData"],
            body["materialData"],
            os.path.join(settings.BASE_DIR, "files/template.xlsx"),
            os.path.join(settings.BASE_DIR, "files/finish.xlsx"),
        )
        file = open("files/finish.xlsx", "rb")
        return FileResponse(file)
